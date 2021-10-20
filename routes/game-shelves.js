const express = require("express");
const { asyncHandler, csrfProtection } = require("./utils");
const db = require("../db/models");
const router = express.Router();

router.get("/new", csrfProtection, (req, res) => {
  const userId = req.session.auth.userId;
  res.render("new-shelf", { userId, csrfToken: req.csrfToken() });
});

router.post("/:id(\\d+)/delete",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    userId = req.session.auth.userId;

    const shelf = await db.GameShelf.findOne({ where: { id } });
    await shelf.destroy();

    res.redirect(`/users/${userId}`);
  })
)



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

module.exports = router;
