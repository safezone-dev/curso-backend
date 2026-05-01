import dotenv from 'dotenv';
dotenv.config(); 

import express from 'express';
import routes from './routes';
import { connectDB } from './config/db';



const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// SOLO UNA LÍNEA 👇
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('API profesional 🚀');
});

// antes de levantar el servidor
connectDB();

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});