const express = require('express');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils');
const { loginUser, logoutUser } = require('../auth');
const db = require('../db/models');

const router = express.Router();

/* GET users listing. */
router.get('/:id(\\d+)', async function(req, res, next) {
  const id = req.params.id;
  const user = await db.User.findByPk(id);

  res.render('user-page', { title: `${user.firstName}'s page`});
});

router.get('/register', csrfProtection, (req, res) => {
  const user = db.User.build();
  res.render('user-register', {
    title: 'Register',
    user,
    csrfToken: req.csrfToken()
  });
});

module.exports = router;
