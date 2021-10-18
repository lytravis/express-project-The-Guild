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

  res.render("user-page", { title: `${user.firstName}'s page` });
});

router.get("/register", csrfProtection, (req, res) => {
  const user = db.User.build();
  res.render("user-register", {
    title: "Register",
    // user,
    csrfToken: req.csrfToken(),
  });
});

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
  asyncHandler(async (req, res, next) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;
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

      if (user !== null) {
        const passwordMatch = await bcrypt.compare(
          password,
          user.hashedPassword.toString()
        );

        if (passwordMatch) {
          logUserIn(req, res, user);
          return res.redirect("/");
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
