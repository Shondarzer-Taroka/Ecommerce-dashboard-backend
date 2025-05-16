import { Request, Response } from 'express';
import * as productService from '../services/product.service';
import { handleError } from '../utils/error-handler';

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json(product);
  } catch (error) {
    handleError(res, error);
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (error) {
    handleError(res, error);
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    const product = await productService.getProductById(req.params.id);
    res.json(product);
  } catch (error) {
    handleError(res, error);
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const product = await productService.updateProduct(req.params.id, req.body);
    res.json(product);
  } catch (error) {
    handleError(res, error);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    await productService.deleteProduct(req.params.id);
    res.status(204).send();
  } catch (error) {
    handleError(res, error);
  }
}; 
