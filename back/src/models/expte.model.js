import mongoose from "mongoose";

//Esquema principal de expediente
const ExpteSchema = new mongoose.Schema({
    nro_expte: {
        type: String,
        required: true
    },
    anio:{
        type: Number,
        required: true
    },
    iniciador: {
        type: String,
        required: true
    },
    caratula: {
        type: String,
        required: true
    },
    localidad: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    codigo: {
        type: Number,
        required: true
    },
    aprobada: {
        type: Boolean,
        required: false
    },
    observaciones: {
        type: String,
        required: false
    },
    ingreso: {
        type: Date,
        required: true
    },
    egreso: {
        type: Date,
        required: false
    }
})

const ExpteModel = mongoose.model('ExpteModel', ExpteSchema);

export default ExpteModel;

//Formato de fecha
// "ingreso": "2024-04-27T08:00:00Z",
// "egreso": "2024-04-27T17:00:00Z"