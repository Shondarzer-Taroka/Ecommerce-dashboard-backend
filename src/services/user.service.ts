


import * as userModel from '../models/user.model';
import { User, Role } from '@prisma/client';
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/auth';

export const registerUser = async (userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>) => {
  const existingUser = await userModel.findUserByEmail(userData.email);
  if (existingUser) {
    throw new Error('Email already in use');
  }

  const hashedPassword = await bcrypt.hash(userData.password, 10);
  return await userModel.createUser({
    ...userData,
    password: hashedPassword,
  });
};

export const loginUser = async (email: string, password: string) => {
  const user = await userModel.findUserByEmail(email);
  if (!user) {
    throw new Error('Invalid credentials');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid credentials');
  }

  const token = generateToken(user.id, user.role);
  return { user, token };
};

export const getAllUsers = async () => {
  return await userModel.getAllUsers();
};

export const getUserById = async (id: string) => {
  return await userModel.getUserById(id);
};

export const updateUser = async (id: string, userData: Partial<User>) => {
  if (userData.password) {
    userData.password = await bcrypt.hash(userData.password, 10);
  }
  return await userModel.updateUser(id, userData);
};

export const deleteUser = async (id: string) => {
  return await userModel.deleteUser(id);
};
