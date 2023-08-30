import { Router } from "express";
import { registerUser, loginUser } from "../controller/authController";

export const router = Router();

router.post("/register", registerUser);

router.post("/login", loginUser);
