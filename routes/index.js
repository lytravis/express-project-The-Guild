const express = require("express");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const { csrfProtection, asyncHandler } = require("./utils");
const { logUserOut, logUserIn } = require("../auth");
const db = require("../db/models");

const router = express.Router();

/* GET home page. */
router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const actionGames = await db.Game.findAll({ where: { genreId: 3 } });
    const sportsGames = await db.Game.findAll({ where: { genreId: 4 } });
    const rolePlayingGames = await db.Game.findAll({ where: { genreId: 1 } });
    res.render("index", {
      title: "The Guild",
      actionGames,
      sportsGames,
      rolePlayingGames,
    });
  })
);

// Demo User
router.get(
  "/demo",
  asyncHandler(async (req, res) => {
    const user = await db.User.findOne({
      where: {
        email: "demo@gmail.com",
      },
    });
    const shelves = await db.GameShelf.findAll({ where: { userId: user.id } });
    const games = await db.Game.findAll({
      include: [
        {
          model: db.GameShelf,
          where: { userId: user.id, shelfName: "Is Playing" },
        },
      ],
    });

    res.render("user-page", {
      title: `${user.firstName}'s page`,
      shelves,
      user,
      games,
    });
  })
);
router.post(
  "/demo",
  asyncHandler(async (req, res, next) => {
    const user = await db.User.findOne({
      where: {
        email: "demo@gmail.com",
      },
    });
    logUserIn(req, res, user);

    const shelves = await db.GameShelf.findAll({ where: { userId: user.id } });
    const games = await db.Game.findAll({
      include: [
        {
          model: db.GameShelf,
          where: { userId: user.id, shelfName: "Is Playing" },
        },
      ],
    });
    console.log(req.session);
    return req.session.save((err) => {
      if (err) {
        next(err);
      } else {
        return res.render("user-page", {
          title: `${user.firstName}'s page`,
          shelves,
          user,
          games,
        });
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
