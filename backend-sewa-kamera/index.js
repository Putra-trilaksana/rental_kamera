import express from 'express';
import * as dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import {UserRouter, ItemRouter} from './src/routes/index.js';

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors({
        origin: "http://127.0.0.1:5173",
        credentials: true,
    })
);
app.use("/users", UserRouter);
app.use("/admin", ItemRouter);
app.use("/uploads", express.static('uploads'));

app.listen(port, () => {
    console.log(`Server running at PORT ${port}`)
})