const express = require("express");
const router = express.Router();

const { requireAuth } = require("../auth");
const { csrfProtection, asyncHandler } = require("./utils");

const db = require("../db/models");
const { Game, Genre } = db;

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const games = await Game.findAll();
    res.render("games-page", { games });
  })
);

router.get(
  "/:gameId(\\d+)",
  asyncHandler(async(req, res) => {
    const id = req.params.gameId;
    const game = await Game.findOne(id);
    res.render("one-game-page", {game})
}))

module.exports = router;
