import express from 'express';
import {getAll, insertOne, getOne, delOneExpte, findById} from '../controllers/expte.Controller.js';

const router = express.Router();

router.get("/endpoints", (req, res) => {
    res.send("Hello from Expte route");
})

router.get("/expte", getAll);

router.get("/expte/:nro_expte", getOne);

// router.get("/expte/:nro_expte", searchExpte);

router.post("/expte/", insertOne);

router.delete("/expte/:id", delOneExpte);

// router.put("/expte/:nro_expte", putExpte);

router.get("/expte/:id", findById);

export default router;