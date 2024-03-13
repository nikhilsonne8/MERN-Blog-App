import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import router from './routes/route.js';

dotenv.config();

const app = express();

app.use('/',router);

const PORT = 8000;

app.listen(PORT, () => {console.log(`server is running on PORT ${PORT}.... ho gaya na!!`)});

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME,PASSWORD);