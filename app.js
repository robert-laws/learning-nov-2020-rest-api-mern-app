const express = require('express');
const bodyParser = require('body-parser');

const itemsRoutes = require('./routes/items');

const app = express();

app.use('/api/items', itemsRoutes);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }

  res
    .status(error.code || 500)
    .json({ message: error.message || 'An unknown error occurred.' });
});

app.listen(5000);
