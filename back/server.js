//crear un servidor basico con express
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { connectDB } from './src/models/db.js';
import selectRouter from './src/routes/Select.Route.js';
import expteRouter from './src/routes/expte.Route.js';
import dotEnv from 'dotenv';

dotEnv.config();
const app = express();
//morgan registra solicitudes en la consola
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
connectDB();
app.use(selectRouter);
app.use(expteRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Server running on http://localhost:${PORT}/getAreas`);
    console.log(`Server running on http://localhost:${PORT}/getCaratulas`);
    console.log(`Server running on http://localhost:${PORT}/getLocalidades`);
})

