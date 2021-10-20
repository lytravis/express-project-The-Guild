const express = require("express");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const { csrfProtection, asyncHandler } = require("./utils");
const { logUserOut, logUserIn } = require("../auth");
const db = require("../db/models");

const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "a/A Express Skeleton Home" });
});

// Demo User
router.post(
  "/demo",
  asyncHandler(async (req, res, next) => {
    const user = await db.User.findOne({
      where: {
        email: "demo@gmail.com",
      },
    });
    logUserIn(req, res, user);

    return req.session.save((err) => {
      if (err) {
        next(err);
      } else {
        return res.redirect("/");
      }
    });
  })
);

// logout here so redirect to home
router.post("/logout", (req, res) => {
  logUserOut(req, res);
  res.redirect("/");
});

module.exports = router;
