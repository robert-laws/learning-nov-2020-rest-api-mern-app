// users routes
const express = require('express');
const { check } = require('express-validator');

const usersController = require('../controllers/users');

const router = express.Router();

router.get('/', usersController.getUsers);

router.get('/:id', usersController.getUsers);

router.post(
  '/signup',
  [
    [
      check('firstName').not().isEmpty(),
      check('lastName').not().isEmpty(),
      check('email').normalizeEmail().isEmail(),
      check('password').isLength({ min: 6 }),
    ],
  ],
  usersController.signup
);

router.post('/login', usersController.login);

module.exports = router;
