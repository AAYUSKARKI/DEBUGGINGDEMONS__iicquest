import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
const app = express();

//dotenv config
dotenv.config({path : './.env'})
console.log(process.env.CORS_ORIGIN);


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//import routes
import Qouterouter from "./routes/quote.route.js";
app.use("/api/v1/quotes",Qouterouter)

export { app }