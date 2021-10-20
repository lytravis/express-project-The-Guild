const express = require('express');
const { asyncHandler, csrfProtection } = require('./utils');
const router = express.Router();
const { Review } = require('../db/models')

router.get('/', csrfProtection, (req, res)=>{
    res.render('review-form', {csrfToken: req.csrfToken()})
});

router.post('/', csrfProtection, asyncHandler(async(req, res)=>{
    const userId = req.session.auth.userId;
    const gameId = req.params.gameId;
    const { rating, content } = req.body;
    await Review.create({
        userId,
        gameId,
        rating,
        content
    });
    res.render
}));



module.exports = router;
