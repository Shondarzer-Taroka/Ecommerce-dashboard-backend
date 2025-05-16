import prisma from '../config/database';
import { User, Role, Prisma } from '@prisma/client';

// export const createUser = async (userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>) => {
//   return await prisma.user.create({
//     data: userData,
//   });
// };


export const createUser = async (userData: Prisma.UserCreateInput) => {
  return await prisma.user.create({
    data: userData,
  });
};

export const findUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: { email },
  });
};

export const getAllUsers = async () => {
  return await prisma.user.findMany();
};

export const getUserById = async (id: string) => {
  return await prisma.user.findUnique({
    where: { id },
  });
};

export const updateUser = async (id: string, userData: Partial<User>) => {
  return await prisma.user.update({
    where: { id },
    data: userData,
  });
};

export const deleteUser = async (id: string) => {
  return await prisma.user.delete({
    where: { id },
  });
};