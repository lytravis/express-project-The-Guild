const express = require("express");
const router = express.Router();

const { requireAuth } = require("../auth");
const { csrfProtection, asyncHandler } = require("./utils");

const db = require("../db/models");
const { Game, Genre } = db;

router.get(
  "/games",
  asyncHandler(async (req, res, next) => {
    const games = await Game.findAll();
    res.render("games-page", { games });
  })
);

module.exports = router;
