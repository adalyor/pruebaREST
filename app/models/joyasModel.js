const mongose = require('mongoose')

const joyasSchema = new mongose.Schema({
    nombre:{
        type: String,
        required: true,
        length: 50,
    },
    descripcion:{
        type: String,
        required: true,
        length: 200,
    },
    precio:{
        type: Number,
        required: true,
    },
    peso:{
        type: Number,
        required: true,
    },
    stock:{
        type: Number,
        default: 10
    }
})

const joyasModel = mongose.model('joyas', joyasSchema)

module.exports = joyasModel