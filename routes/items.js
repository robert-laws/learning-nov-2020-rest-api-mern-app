// items routes
const express = require('express');

const itemControllers = require('../controllers/items');

const router = express.Router();

router.get('/', itemControllers.getItems);

router.get('/:id', itemControllers.getItem);

router.post('/', itemControllers.createItem);

router.patch('/:id', itemControllers.updateItem);

router.delete('/:id', itemControllers.deleteItem);

module.exports = router;
