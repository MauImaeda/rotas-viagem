const express = require('express');
const router = express.Router();
const controller = require('../controllers/rotaController')
router.get('/', controller.get);
router.post('/adicionar-rota', controller.post);
module.exports = router;