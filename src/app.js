const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

//Rotas
const index = require('./routes/index');
const rotaRoute = require('./routes/rotaRoutes');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(function (error, req, res, next) {
        if (error instanceof SyntaxError) { //Handle SyntaxError here.
                return res.status(400).send("Json formatado incorretamente");
        } else {
                next();
        }
});
app.use('/', index);
app.use('/api', rotaRoute);
module.exports = app;
