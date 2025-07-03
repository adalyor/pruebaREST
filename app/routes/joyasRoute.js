const express = require('express')
const router = express.Router()
const joyasController = require('../controllers/joyasControllers')

router.get('/', joyasController.buscarTodo)

module.exports=router