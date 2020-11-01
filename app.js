const express = require('express');
const bodyParser = require('body-parser');

const itemsRoutes = require('./routes/items');

const app = express();

app.use(itemsRoutes);

app.listen(5000);
