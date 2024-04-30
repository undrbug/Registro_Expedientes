import express from 'express';
import { getCollection } from '../models/db.js';

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        areas: "http://localhost:3000/getAreas",
        caratulas: "http://localhost:3000/getCaratulas",
        localidades: "http://localhost:3000/getLocalidades"
    });
});

router.get("/getAreas", async (req, res) =>{
    let arr = await getCollection('registro', 'area');
    res.send(arr);
});
    
router.get("/getLocalidades", async (req, res) => {
    let arr = await getCollection('registro', 'localidades');
    res.send(arr);
})
router.get("/getCaratulas", async (req, res) => {
    let arr = await getCollection('registro', 'caratula');
    res.send(arr);
})

router.post("/postExpte", async (req, res) => {
    res.send(`post un expediente`);
})

export default router;