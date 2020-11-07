// items routes
const express = require('express');
const { check } = require('express-validator');

const itemsController = require('../controllers/items');

const router = express.Router();

router.get('/', itemsController.getItems);

router.get('/:id', itemsController.getItem);

router.post(
  '/',
  [
    check('title').not().isEmpty(),
    check('description').isLength({ min: 5 }),
    check('group').not().isEmpty(),
  ],
  itemsController.createItem
);

router.patch(
  '/:id',
  [
    check('title').not().isEmpty(),
    check('description').isLength({ min: 5 }),
    check('group').not().isEmpty(),
  ],
  itemsController.updateItem
);

router.delete('/:id', itemsController.deleteItem);

module.exports = router;
