 
import prisma from '../config/database';
import { Order, OrderStatus } from '@prisma/client';

export const createOrder = async (orderData: {
  userId: string;
  productIds: string[];
  total: number;
  status?: OrderStatus;
}) => {
  return await prisma.order.create({
    data: {
      user: { connect: { id: orderData.userId } },
      products: { connect: orderData.productIds.map(id => ({ id })) },
      total: orderData.total,
      status: orderData.status || 'PENDING',
    },
    include: {
      user: true,
      products: true,
    },
  });
};

export const getAllOrders = async () => {
  return await prisma.order.findMany({
    include: {
      user: true,
      products: true,
    },
  });
};

export const getOrderById = async (id: string) => {
  return await prisma.order.findUnique({
    where: { id },
    include: {
      user: true,
      products: true,
    },
  });
};

export const updateOrderStatus = async (id: string, status: OrderStatus) => {
  return await prisma.order.update({
    where: { id },
    data: { status },
    include: {
      user: true,
      products: true,
    },
  });
};

export const deleteOrder = async (id: string) => {
  return await prisma.order.delete({
    where: { id },
  });
};

export const getOrdersByUserId = async (userId: string) => {
  return await prisma.order.findMany({
    where: { userId },
    include: {
      products: true,
    },
  });
};