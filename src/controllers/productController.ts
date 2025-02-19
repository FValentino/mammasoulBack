import { Request, Response } from "express"
import { AppDataSource } from "../config/db"
import { Product } from "../models/Products"

const productRepository = AppDataSource.getRepository(Product)

// get all products
export const getProducts = async (_req: Request, res: Response) => {
  const products = await productRepository.find()

  res.json(products)
}

// get one product
export const getProduct = async (req: Request, res: Response) => {
  const product = await productRepository.findOneBy({ id: Number(req.params.id) })

  if (!product) {
    return res.status(404).json({ message: "Producto no encontrado" })
  }

  return res.json(product)
}

// Crear un nuevo producto
export const createProduct = async (req: Request, res: Response) => {
  const { name, price, description } = req.body;
  const newProduct = productRepository.create({ name, price, description });
  await productRepository.save(newProduct);
  res.status(201).json(newProduct);
};

// Actualizar un producto
export const updateProduct = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const product = await productRepository.findOneBy({ id });

  if (!product) {
    return res.status(404).json({ message: "Producto no encontrado" })
  };

  productRepository.merge(product, req.body);
  await productRepository.save(product);
  return res.json(product);
};

// Eliminar un producto
export const deleteProduct = async (req: Request, res: Response) => {
  const result = await productRepository.delete(Number(req.params.id));
  if (result.affected === 0) {
    return res.status(404).json({ message: "Producto no encontrado" })
  };

  return res.status(204).send();
};