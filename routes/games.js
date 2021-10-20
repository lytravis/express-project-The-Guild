const express = require("express");
const router = express.Router();

const { requireAuth } = require("../auth");
const { csrfProtection, asyncHandler } = require("./utils");

const db = require("../db/models");
const { Game, Genre, Review } = db;

router.get("/", asyncHandler(async (req, res) => {
    const games = await Game.findAll();
    res.render("games-page", { games });
  })
);

router.get("/:gameId(\\d+)", asyncHandler(async(req, res) => {
    const id = req.params.gameId;
    const game = await Game.findByPk(id);
    const reviews = await Review.findAll({
      where: {gameId: id}
    })
    res.render("one-game-page", {game, reviews})
}));

module.exports = router;
