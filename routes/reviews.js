const express = require('express');
const { asyncHandler, csrfProtection } = require('./utils');
const router = express.Router();
const { Review, Game } = require('../db/models');
const { requireAuth } = require('../auth');

// get all reviews for specific game
router.get('/', csrfProtection, (req, res)=>{
    res.render('review-form', {csrfToken: req.csrfToken()})
});

// post review for specific game
router.post('/', csrfProtection, asyncHandler(async(req, res)=>{
    const userId = req.session.auth.userId;
    const gameId = req.params.gameId;
    const { rating, content } = req.body;
    const game = await Game.findByPk(userId);
    await Review.create({
        userId,
        gameId,
        rating,
        content
    });
    const reviews = await Review.findAll({
        where: {gameId}
    });
    res.render('one-game-page', {reviews, game});
}));

router.get('/:id(\\d+)/update', csrfProtection, (req, res) => {
    res.render('review-form', {csrfToken: req.csrfToken()})
})

// patch for specific review for specific game
router.post('/:id(\\d+)/update', csrfProtection, asyncHandler(async(req, res) => {
    requireAuth(req, res, next);
    const reviewId = req.params.id;
    const userId;
}))

module.exports = router;
