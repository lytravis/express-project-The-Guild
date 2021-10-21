const express = require("express");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const { csrfProtection, asyncHandler } = require("./utils");
const { logUserOut, logUserIn } = require("../auth");
const db = require("../db/models");

const router = express.Router();

/* GET users listing. */
router.get("/:id(\\d+)", async function (req, res, next) {
  const id = req.params.id;
  const user = await db.User.findByPk(id);
  const shelves = await db.GameShelf.findAll({ where: { userId: user.id } });
  
  res.render("user-page", { title: `${user.firstName}'s page`, shelves, user });
});


router.get("/register", csrfProtection, (req, res) => {
  res.render("user-register", {
    title: "Register",
    csrfToken: req.csrfToken(),
  });
});

const userValidators = [
  check("firstName")
    .exists({ checkFalsy: true })
    .withMessage("Please provide your first name")
    .isLength({ max: 50 })
    .withMessage("Please limit your first name to 50 characters long"),
  check("lastName")
    .exists({ checkFalsy: true })
    .withMessage("Please provide your last name")
    .isLength({ max: 50 })
    .withMessage("Please limit your last name to 50 characters long"),
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please provide your Email Address")
    .isLength({ max: 50 })
    .withMessage("Please limit your email address to 50 characters long")
    .isEmail()
    .withMessage("Provided email Address is not a valid email")
    .custom((value) => {
      return db.User.findOne({ where: { email: value } }).then((user) => {
        if (user) {
          return Promise.reject(
            "The provided email address is already in use.  Please try again"
          );
        }
      });
    }),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Password")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, "g")
    .withMessage(
      'Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "%^&!@#$*")'
    ),
  check("confirmPassword")
    .exists({ checkFalsy: true })
    .withMessage("Please confirm your password")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Your passwords must match");
      }
      return true;
    }),
];

router.get("/login", csrfProtection, (req, res) => {
  res.render("user-login", {
    title: "Login",
    csrfToken: req.csrfToken(),
  });
});

const loginValidators = [
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a valid email address"),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a valid Password"),
];

router.post(
  "/register",
  csrfProtection,
  userValidators,
  asyncHandler(async (req, res, next) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    const user = db.User.build({
      email,
      firstName,
      lastName,
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.hashedPassword = hashedPassword;
      await user.save();
      logUserIn(req, res, user);
      await db.GameShelf.create({ shelfName: 'Currently Playing', userId: user.id });
      await db.GameShelf.create({ shelfName: 'To Play', userId: user.id });
      await db.GameShelf.create({ shelfName: 'Played', userId: user.id });
      res.redirect("/");
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render("user-register", {
        title: "Register",
        user,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  })
);

router.post(
  "/login",
  csrfProtection,
  loginValidators,
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    let errors = [];
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const user = await db.User.findOne({ where: { email } });
      console.log(user);
      if (user !== null) {
        const passwordMatch = await bcrypt.compare(
          password,
          user.hashedPassword.toString()
        );

        if (passwordMatch) {
          logUserIn(req, res, user);
          return res.redirect(`/users/${user.id}`);
        }
      }
      errors.push("Please enter a valid email and password");
    } else {
      errors = validatorErrors.array().map((error) => error.msg);
    }
    res.render("user-login", {
      title: "Login",
      email,
      errors,
      csrfToken: req.csrfToken(),
    });
  })
);

module.exports = router;
