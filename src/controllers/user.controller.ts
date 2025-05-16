import { Request, Response } from 'express';
import * as userService from '../services/user.service';
import { handleError } from '../utils/error-handler';

export const register = async (req: Request, res: Response) => {
  try {
    const user = await userService.registerUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    handleError(res, error);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const result = await userService.loginUser(email, password);
    res.json(result);
  } catch (error) {
    handleError(res, error);
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    handleError(res, error);
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.json(user);
  } catch (error) {
    handleError(res, error);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    res.json(user);
  } catch (error) {
    handleError(res, error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    await userService.deleteUser(req.params.id);
    res.status(204).send();
  } catch (error) {
    handleError(res, error);
  }
}; 
