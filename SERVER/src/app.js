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
import Userrouter from "./routes/user.route.js";
import appointmentRouter from "./routes/appointment.route.js"
import chatRouter from "./routes/chat.route.js"
import mcqRouter from './routes/mcq.route.js'
import rewardRouter from './routes/reward.route.js'

app.use("/api/v1/users",Userrouter)
app.use("/api/v1/quotes",Qouterouter)
app.use("/api/v1/appointment",appointmentRouter)
app.use("/api/v1/chats",chatRouter)
app.use('/api/v1/reward',rewardRouter)
app.use('/api/v1/mcq',mcqRouter)

export { app }