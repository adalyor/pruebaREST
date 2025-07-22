const express = require('express')
const router = express.Router()
const joyasController = require('../controllers/joyasControllers')

router.get('/', joyasController.buscarTodo)
    .post('/', joyasController.agregarJoya)//antes del punto nos debe de respetar lo de router y despues del punto es la peticion que queremos hacer, en este caso es un post, pero puede ser get, put, post etc
    .get('/:key/:value',joyasController.buscarJoya,joyasController.mostrarJoya)//aqui se debe de poner el nombre de la funcion que queremos llamar, en este caso es buscarJoya, pero puede ser cualquier otra funcion que este dentro del controlador
    .delete('/:key/:value', joyasController.buscarJoya, joyasController.eliminarJoya)//aqui se debe de poner el nombre de la funcion que queremos llamar, en este caso es eliminarJoya, pero puede ser cualquier otra funcion que este dentro del controlador
    .put('/:key/:value', joyasController.buscarJoya, joyasController.actualizarJoya)
    module.exports=router