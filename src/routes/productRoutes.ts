import type { Request, Response } from "express";

const { Router } = require("express");
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = Router();

router.get("/", (req: Request, res: Response) => getProducts(req, res));
router.get("/:id", (req: Request, res: Response) => getProductById(req, res));
router.post("/", (req: Request, res: Response) => createProduct(req, res));
router.put("/:id", (req: Request, res: Response) => updateProduct(req, res));
router.delete("/:id", (req: Request, res: Response) => deleteProduct(req, res));


module.exports = router;
