import { Router } from "express";
import {submitAnswers,getAnswersByUser,getAllQuestions} from "../controller/mcq.controller.js";

const router = Router()

router.route("/submitanswers").post(submitAnswers)
router.route("/getquestions").post(getAllQuestions)
router.route("/getanswersbyuser").get(getAnswersByUser)


export default router 