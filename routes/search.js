const express = require("express");
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const Sequelize = require("sequelize")
const Op = Sequelize.Op




const db = require("../db/models");
const { Game } = db;

router.post('/', asyncHandler(async (req, res) => {
    const { search } = req.body
    const games = await Game.findAll({
        where: {title: {[Op.iLike]: `%${search}%`}}
    });
    // console.log(games[0] !== undefined)

        res.render('search-results', {search, games})
}));

module.exports = router;
