const express = require('express');
const router = express.Router();

const {listar,verNumero,guardar} = require('../controllers/indexController')


/* GET home page. */
router.get('/', listar );
router.get('/verNumero/:id',verNumero)


module.exports = router;
