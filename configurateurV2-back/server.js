import express from "express";
import dotenv from "dotenv";
import mongoose from 'mongoose';
import routes from './routes/routes.js';
import cors from 'cors';

dotenv.config()

const PORT = process.env.PORT||3000


const app = express()
app.use(cors())
//permet à express de parser le req.body correctement
app.use(express.json())
app.use(routes)


mongoose.connect('mongodb://localhost:27017/configurateur-b-v2');



app.listen(PORT, () => {console.log(`le serveur est lancé sur le port ${PORT}` )})
