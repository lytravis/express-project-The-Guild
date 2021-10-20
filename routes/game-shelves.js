const express = require("express");
const { asyncHandler, csrfProtection } = require("./utils");
const db = require("../db/models");
const router = express.Router();

router.get("/:id(\\d+)", asyncHandler(async (req, res) => {
  const shelfId = req.params.id;
  const games = await db.Game.findAll({
    include: [{
      model: db.GameShelf,
      where: { id: shelfId }
    }]
  })
  res.render("shelf-page", { games });
}));

router.post("/:id(\\d+)/delete",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    userId = req.session.auth.userId;

    const shelf = await db.GameShelf.findOne({ where: { id } });
    await shelf.destroy();

    res.redirect(`/users/${userId}`);
  })
);

router.post(
  "/new",
  asyncHandler(async (req, res) => {
    const { shelfName } = req.body;
    const userId = req.session.auth.userId;
    const shelf = await db.GameShelf.create({
      userId,
      shelfName,
    });

    res.redirect(`/users/${userId}`);
  })
);

router.post("/:id(\\d+)/add", asyncHandler(async (req, res) => {
  const{ addToShelf } = req.body;
  console.log(req.params.id);
  const userId = req.session.auth.userId;
  const newGame = db.GameGameShelf.create({
    gameShelvesId: addToShelf,
    gameId
  })

}));

module.exports = router;
