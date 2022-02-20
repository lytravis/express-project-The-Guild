const express = require("express");
const { asyncHandler, csrfProtection } = require("./utils");
const db = require("../db/models");
const router = express.Router();

router.get("/:id(\\d+)",
  asyncHandler(async (req, res) => {
  const shelfId = req.params.id;
  const userId = req.session.auth.userId;
  const shelf = await db.GameShelf.findByPk(shelfId);
  const games = await db.Game.findAll({
    include: [{
      model: db.GameShelf,
      where: { id: shelfId }
    }]
  })
  res.render("shelf-page", { games, shelf, userId });
}));

router.post("/:id(\\d+)/delete",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const userId = req.session.auth.userId;

    const shelf = await db.GameShelf.findOne({ where: { id } });
    await shelf.destroy();

    res.redirect(`/users/${userId}`);
  })
);

router.post(
  "/new",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const { newShelf } = req.body;
    const userId = req.session.auth.userId;
    const shelf = await db.GameShelf.create({
      userId,
      shelfName: newShelf
    });
    res.status(200).send({ shelf });
  })
);

router.post("/:id(\\d+)/add", asyncHandler(async (req, res) => {
  const { addToShelf } = req.body;
  const gameShelvesId = addToShelf.split(',')[0];
  const gameId = addToShelf.split(',')[1];
  const userId = req.session.auth.userId;

  const newGame = await db.GameGameShelf.create({
    gameShelvesId,
    gameId
  })
  res.redirect(`/game_shelves/${gameShelvesId}`);
}));

router.post("/:id(\\d+)/games/:gameId(\\d+)/delete",
  asyncHandler(async (req, res) => {
    const { id, gameId } = req.params;
    const game = await db.GameGameShelf.findOne({
      where: {
        gameShelvesId: id,
        gameId
      }
    })
    await game.destroy();
    res.redirect(`/game_shelves/${id}`);
  }));

module.exports = router;
