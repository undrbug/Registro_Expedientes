import mongoose from 'mongoose';
import ExpteModel from '../models/expte.model.js';
import { connectDB } from '../models/db.js';

// Inserto un registro en la coleccion
// await database.insertOne({ nombre: area });

//obtener todos los registros de la colección utilizando el esquema ExpteModel



export const getAll = async (req, res) => {
    try {
        const client = await connectDB();
        const exptes = await client.db("registro").collection("expediente").find().toArray();
        // const exptes = await ExpteModel.find();
        res.json(exptes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getOne = async (req, res) => {
    const { nro_expte } = req.params;
    try {
        const client = await connectDB();
        const exptes = await client.db("registro").collection("expediente").findOne({ nro_expte: nro_expte });
        // const exptes = await ExpteModel.findOne({ nro_expte: req.params.nro_expte });
        res.json(exptes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    // await client.close();

}

export const insertOne = async (req, res) => {
    const { nro_expte, anio, iniciador, caratula, localidad, area, codigo, aprobada, observaciones, ingreso, egreso } = req.body;
    const newExpte = new ExpteModel({ nro_expte, anio, iniciador, caratula, localidad, area, codigo, aprobada, observaciones, ingreso, egreso });
    try {
        const client = await connectDB();
        const exptes = await client.db("registro").collection("expediente").insertOne(newExpte);
        res.json(`id: ${exptes.insertedId} correctamente insertado`);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
    // await client.close();
}

export const delOneExpte = async (req, res) => {
    const { id } = req.params;
    try {

        const client = await connectDB();
        const exptes = ExpteModel.findOneAndDelete( id );
        console.log(exptes.insertedId);
        if (!exptes) {
            return res.status(404).json({ message: "No se encontro el expediente" });
        }
        res.json({ message: `Expediente con ID ${id} eliminado correctamente` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    // await client.close();
}

export const findById = async (req, res) => {
    const { id } = req.params;
    res.json({message: `Buscando expediente con ID: ${req.params.id}`});
    // try {
    //     const client = await connectDB();
    //     const exptes = await client.db("registro").collection("expediente").findOne({ _id: id});
    //     // const exptes = await ExpteModel.findById(id);
    //     res.json(exptes);
    // } catch (error) {
    //     res.status(500).json({ message: error.message });
    // }
    // await client.close();
}