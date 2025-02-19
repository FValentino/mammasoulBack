import { Router } from "express";
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../controllers/productController";

const router = Router();

router.get("/", (req, res) => { getProducts(req, res); });
router.get("/:id", (req, res) => { getProductById(req, res); });
router.post("/", (req, res) => { createProduct(req, res); });
router.put("/:id", (req, res) => { updateProduct(req, res); });
router.delete("/:id", (req, res) => { deleteProduct(req, res); });

export default router;
