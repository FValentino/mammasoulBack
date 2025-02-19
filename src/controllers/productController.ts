import { Request, Response } from "express";
import { AppDataSource } from "../config/db";
import { Product } from "../models/Products";

const productRepository = AppDataSource.getRepository(Product);

// Obtener todos los productos
export const getProducts = async (_req: Request, res: Response): Promise<Response> => {
  try {
    const products = await productRepository.find();
    return res.json(products);
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener productos", error });
  }
};

// Obtener un producto por ID
export const getProductById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: "ID no válido" });
    }

    const product = await productRepository.findOneBy({ id });
    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    return res.json(product);
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener el producto", error });
  }
};

// Crear un nuevo producto
export const createProduct = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name, price, description } = req.body;
    if (!name || !price) {
      return res.status(400).json({ message: "Nombre y precio son requeridos" });
    }

    const newProduct = productRepository.create({ name, price, description });
    await productRepository.save(newProduct);
    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(500).json({ message: "Error al crear el producto", error });
  }
};

// Actualizar un producto
export const updateProduct = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: "ID no válido" });
    }

    const product = await productRepository.findOneBy({ id });
    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    productRepository.merge(product, req.body);
    await productRepository.save(product);
    return res.json(product);
  } catch (error) {
    return res.status(500).json({ message: "Error al actualizar el producto", error });
  }
};

// Eliminar un producto
export const deleteProduct = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: "ID no válido" });
    }

    const result = await productRepository.delete(id);
    if (result.affected === 0) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ message: "Error al eliminar el producto", error });
  }
};
