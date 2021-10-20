const express = require("express");
const router = express.Router();

const { requireAuth } = require("../auth");
const { csrfProtection, asyncHandler } = require("./utils");

const db = require("../db/models");
const { Game, Genre, Review, GameShelf, User } = db;

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
    const userId = req.session.auth.userId;
    const gameshelves = await GameShelf.findAll({
      include: [{
        model: User,
        where: { id: userId }
      }]
    })
    const id = req.params.gameId;
    const game = await Game.findByPk(id);
    const reviews = await Review.findAll({
      where: {gameId: id}
    })
    res.render("one-game-page", {game, reviews, userId, gameshelves})
}));

module.exports = router;
