import express from "express";
import { register, login } from "../controllers/authController.js";
import { verifyToken, verifyRole } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.post("/products", verifyToken, verifyRole("vendedor"), createProduct);


export default router;