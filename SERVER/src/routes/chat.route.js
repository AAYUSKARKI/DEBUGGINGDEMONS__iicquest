import { Router } from "express";
import { createMessage, getMessages } from "../controller/chat.controller.js";

const router = Router()

router.route("/createmessage").post(createMessage)

router.route("/getmessages").post(getMessages)


export default router 