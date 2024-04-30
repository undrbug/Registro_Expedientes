import express from 'express';

const router = express.Router();

export const getAreas = (req, res) => {
    res.send("getAreas");
}

export const getLocalidades = (req, res) => {    
    res.send("getLocalidades");
}

export const getCaratulas = (req, res) => {
    res.send("getCaratulas");
}

