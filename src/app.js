const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

//Rotas
const index = require('./routes/index');
const rotaRoute = require('./routes/rotaRoutes');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/', index);
app.use('/api', rotaRoute);
module.exports = app;