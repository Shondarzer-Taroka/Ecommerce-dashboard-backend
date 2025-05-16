 
import * as productModel from '../models/product.model';
import { Product } from '@prisma/client';

export const createProduct = async (productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => {
  return await productModel.createProduct(productData);
};

export const getAllProducts = async () => {
  return await productModel.getAllProducts();
};

export const getProductById = async (id: string) => {
  return await productModel.getProductById(id);
};

export const updateProduct = async (id: string, productData: Partial<Product>) => {
  return await productModel.updateProduct(id, productData);
};

export const deleteProduct = async (id: string) => {
  return await productModel.deleteProduct(id);
};