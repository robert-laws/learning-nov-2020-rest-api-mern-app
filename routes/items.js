// items routes
const express = require('express');

const itemControllers = require('../controllers/items');

const router = express.Router();

router.get('/', itemControllers.getItems);

router.get('/:id', itemControllers.getItemById);

router.post('/', itemControllers.createItem);

module.exports = router;
