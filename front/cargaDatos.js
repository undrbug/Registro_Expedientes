import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

//conexion a la base de datos mongoDB
const uri = process.env.MONGO_URI;
dotenv.config()

//Los use para cargar los datos en la base de datos
// const areas = ["Gerencia Social", "Direccion Adjudicaciones", "Notarial", "GAJ Legales", "GAJ juridico-Administrativo", "Tierra y Mensura", "Presidencia", "Gerencia Social", "MEyS General", "En mano", "Archivo TEMP en ADJ", "Recupero", "Informatica", "Dir Administracion", "Trabajo de Campo", "GAJ Tram. de Juicio", "GAJ regularizaciones", "Despacho General"]
// const caratula = ["IRREG HABIT","REGUL HABIT","PAMC","USURPACION","ADJ CR-","ANTECEDENTE","RENOV AQ 2","RENOV AQ 3","RENOV AQ 4","RENOV AQ 5","MODIF PLAN","REINTEGRO","READJ DE VIV","OFICIO","S/APLICACION FONDO SOLIDARIO","VIV SIN ALTA / RELOCALIZADOS","RENUNCIA", "RECTIFICACION", "OTORGAR AQ SOCIAL", "RENOV. SUB X DISCAPACIDAD", "INCUMPL AQ", "COMODATO", "PLAZO 120", "ALQUILER", "MOROSIDAD", "CONSTRUCCION", "RELOCALIZACION", "INTEGRACION SOCIOECONOMICA", "EX-COMBATIENTES", "PERMUTA"]

// let areas = [];
// let caratulas = [];
// let localidades = [];

export const getData = async (db, collection) => {

    const client = new MongoClient(uri);
    // let result = [];
    
    try {
        // Establezco la conexion con mongoDB y la collecion
        return await client.db(db).collection(collection).find().toArray();
        
        // Establezco la conexion con la coleccion
        // const database = db.collection('caratula');
        
        // Elimino un registro de la coleccion
        // await database.deleteOne({ nombre: area });
        
        // Inserto un registro en la coleccion
        // await database.insertOne({ nombre: area });
        
        // Actualizo un registro de la coleccion
        // await database.updateOne({ nombre: area }, { $set: { nombre: 'Gerencia Social' } });
        
        // Obtengo un registro de la coleccion
        // const result = await database.findOne({ nombre: area });
        
        // Obtengo todos los registros de la coleccion que cumplan con la condicion
        // const result = await database.find({ nombre: area }).toArray();
        
        // Obtengo todos los registros de la coleccion
        // arr = await database.find().toArray();
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}


// main("registro", "areas", areas);
// console.log(areas)
// main("registro", "caratulas", caratulas);
// main("registro", "localidades", localidades);

// localidades.forEach((localidad) => {
    //     // main(localidad);
    //     console.log(localidad);
    // })
    
    // async function ejecute() {
    //     areas = await main("registro", "area", areas);
    //     caratulas = await main("registro", "caratula", caratulas);
    //     localidades = await main("registro", "localidades", localidades);
    // }
    
    // ejecute();
    