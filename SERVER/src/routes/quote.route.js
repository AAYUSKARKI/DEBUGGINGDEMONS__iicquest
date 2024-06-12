import { Router } from "express";
import {
    getallquotes
} from "../controller/quote.controller.js";

const router = Router();

router.get("/allquotes", getallquotes);

export default router