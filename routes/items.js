// items routes
const express = require('express');

const itemsController = require('../controllers/items');

const router = express.Router();

router.get('/', itemsController.getItems);

router.get('/:id', itemsController.getItem);

router.post('/', itemsController.createItem);

router.patch('/:id', itemsController.updateItem);

router.delete('/:id', itemsController.deleteItem);

module.exports = router;
