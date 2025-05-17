 
import { Request, Response } from 'express';
import * as orderService from '../services/order.service';
import { handleError } from '../utils/error-handler';

export const createOrder = async (req: Request, res: Response) => {
  try {
    const order = await orderService.createOrder({
      userId: req.body.userId,
      items: req.body.items, // ✅ FIXED HERE
      total: req.body.total,
      status: req.body.status,
    });
    res.status(201).json(order);
  } catch (error) {
    handleError(res, error);
  }
};


export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await orderService.getAllOrders();
    res.json(orders);
  } catch (error) {
    handleError(res, error);
  }
};

export const getOrder = async (req: Request, res: Response) => {
  try {
    const order = await orderService.getOrderById(req.params.id);
    res.json(order);
  } catch (error) {
    handleError(res, error);
  }
};

export const updateOrderStatus = async (req: Request, res: Response) => {
  try {
    const order = await orderService.updateOrderStatus(req.params.id, req.body.status);
    res.json(order);
  } catch (error) {
    handleError(res, error);
  }
};

export const deleteOrder = async (req: Request, res: Response) => {
  try {
    await orderService.deleteOrder(req.params.id);
    res.status(204).send();
  } catch (error) {
    handleError(res, error);
  }
};

export const getUserOrders = async (req: Request, res: Response) => {
  try {
    const orders = await orderService.getUserOrders(req.params.userId);
    res.json(orders);
  } catch (error) {
    handleError(res, error);
  }
};