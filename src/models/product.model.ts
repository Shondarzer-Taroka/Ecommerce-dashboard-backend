 
import prisma from '../config/database';
import { Product } from '@prisma/client';
import { Prisma } from '@prisma/client';

// export const createProduct = async (productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => {
//   return await prisma.product.create({
//     data: productData,
//   });
// };


export const createProduct = async (productData: Prisma.ProductCreateInput) => {
  return await prisma.product.create({
    data: productData,
  });
};

export const getAllProducts = async () => {
  return await prisma.product.findMany();
};

export const getProductById = async (id: string) => {
  return await prisma.product.findUnique({
    where: { id },
  });
};

export const updateProduct = async (id: string, productData: Partial<Product>) => {
  return await prisma.product.update({
    where: { id },
    data: productData,
  });
};

export const deleteProduct = async (id: string) => {
  return await prisma.product.delete({
    where: { id },
  });
};