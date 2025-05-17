

// /// //  src/ order.service.ts

// import * as orderModel from '../models/order.model';
// import { OrderStatus } from '@prisma/client';

// export const createOrder = async (orderData: {
//   userId: string;
//   productIds: string[];
//   total: number;
//   status?: OrderStatus;
// }) => {
//   return await orderModel.createOrder(orderData);
// };

// export const getAllOrders = async () => {
//   return await orderModel.getAllOrders();
// };

// export const getOrderById = async (id: string) => {
//   return await orderModel.getOrderById(id);
// };

// export const updateOrderStatus = async (id: string, status: OrderStatus) => {
//   return await orderModel.updateOrderStatus(id, status);
// };

// export const deleteOrder = async (id: string) => {
//   return await orderModel.deleteOrder(id);
// };

// export const getUserOrders = async (userId: string) => {
//   return await orderModel.getOrdersByUserId(userId);
// };












import * as orderModel from '../models/order.model';
import { OrderStatus } from '@prisma/client';

interface OrderItemInput {
  productId: string;
  quantity: number;
  price: number;
}

interface CreateOrderInput {
  userId: string;
  items: OrderItemInput[];
  total: number;
  status?: OrderStatus;
}

export const createOrder = async (orderData: CreateOrderInput) => {
  return await orderModel.createOrder(orderData);
};

export const getAllOrders = async () => {
  return await orderModel.getAllOrders();
};

export const getOrderById = async (id: string) => {
  return await orderModel.getOrderById(id);
};

export const updateOrderStatus = async (id: string, status: OrderStatus) => {
  return await orderModel.updateOrderStatus(id, status);
};

export const deleteOrder = async (id: string) => {
  return await orderModel.deleteOrder(id);
};

export const getUserOrders = async (userId: string) => {
  return await orderModel.getOrdersByUserId(userId);
};
