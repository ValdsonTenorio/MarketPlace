import express from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
} from "../controllers/productController.js";

import { verifyToken, verifyRole } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", verifyToken, verifyRole("vendedor"), createProduct);

router.get("/", getProducts);

router.get("/:id", getProductById);

router.put("/:id", verifyToken, verifyRole("vendedor"), updateProduct);

router.delete("/:id", verifyToken, verifyRole("vendedor"), deleteProduct);

export default router;
