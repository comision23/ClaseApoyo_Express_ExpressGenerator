const express = require('express');
const router = express.Router();

const {listar,detail,guardar,vistaCrear,crear,vistaEditar,edit} = require('../controllers/indexController')


/* GET home page. */
router.get('/', listar );
router.get('/detail/:id',detail)

router.get('/create',vistaCrear)
router.post('/create',crear)

router.get('/edit/:id',vistaEditar)
router.put('/edit/:id',edit)


router.get('/guardar',guardar)

module.exports = router;
