import express from "express";
const router = express.Router();
import { addEmail } from "../controllers/emailController.js";


router.post("/", addEmail)


export default router;