const express = require('express');
const { asyncHandler, csrfProtection } = require('./utils');
const router = express.Router();
const { Review, Game } = require('../db/models')

router.get('/', csrfProtection, (req, res)=>{
    res.render('review-form', {csrfToken: req.csrfToken()})
});

router.post('/', csrfProtection, asyncHandler(async(req, res)=>{
    const userId = req.session.auth.userId;
    const gameId = req.params.gameId;
    const { rating, content } = req.body;
    const game = await Game.findByPk(userId);
    const newReview = await Review.create({
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



module.exports = router;
