import { createchat } from "../controller/chat.controller.js";
import {Router} from 'express'
const router=Router()
Router.route("/createchat").post(createchat)



export default router