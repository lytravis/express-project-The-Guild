const express = require('express');
const { asyncHandler, csrfProtection } = require('./utils');
const router = express.Router();
const { Review, Game } = require('../db/models');
const { requireAuth } = require('../auth');

// get review form for specific game
router.get('/:gameId(\\d+)', csrfProtection, asyncHandler(async(req, res)=>{
    const gameId = req.params.gameId;
    console.log(gameId)
    const game = await Game.findByPk(gameId)
    res.render('review-form', {csrfToken: req.csrfToken(), gameId, game})
}));

// post review for specific game
router.post('/:gameId(\\d+)', csrfProtection, asyncHandler(async(req, res)=>{
    const userId = req.session.auth.userId;
    const gameId = req.params.gameId;
    console.log(gameId)
    const { rating, content } = req.body;
    await Review.create({
        userId,
        gameId,
        rating,
        content
    });
    res.redirect(`/games/${gameId}`)
}));

// get form to update specific review
router.get('/:gameId(\\d+)/:reviewId(\\d+)/update', requireAuth, csrfProtection, asyncHandler(async(req, res) => {
    const gameId = req.params.gameId;
    const reviewId = req.params.reviewId;
    const game = await Game.findByPk(gameId);
    const userId = req.session.auth.userId;
    const review = await Review.findByPk(reviewId);
    if (review.userId === userId) {
        res.render('update-review', {csrfToken: req.csrfToken(), review, game, gameId, reviewId});
    } else {
        // front end need to have pop up telling user to log in as owner of review
        // res.send('Please log in as the owner of this review');
        res.redirect('/users/login');
    }
}));

// patch for specific review for specific game
router.post('/:gameId(\\d+)/:reviewId(\\d+)/update', csrfProtection, asyncHandler(async(req, res) => {
    const gameId = req.params.gameId;
    const reviewId = req.params.reviewId;
    const { content, rating } = req.body
    const review = await Review.findByPk(reviewId)
    review.update({
        content,
        rating
    });
    res.redirect(`/games/${gameId}`);
}));

module.exports = router;
