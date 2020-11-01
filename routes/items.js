// items routes
const express = require('express');
const { builtinModules } = require('module');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('GET Request in items');
  res.json({ message: 'it works...' });
});

module.exports = router;
