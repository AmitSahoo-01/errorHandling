import { Router } from "express";
import { registerUser } from "../controllers/auth.controller.js"; 
import {regidterValidator} from "../validation/auth.validation.js";

const authRouter = Router();

authRouter.post("/register", regidterValidator ,registerUser);

export default authRouter;