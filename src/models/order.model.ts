 
// import prisma from '../config/database';
// import { Order, OrderStatus } from '@prisma/client';

// export const createOrder = async (orderData: {
//   userId: string;
//   productIds: string[];
//   total: number;
//   status?: OrderStatus;
// }) => {
//   return await prisma.order.create({
//     data: {
//       user: { connect: { id: orderData.userId } },
//       products: { connect: orderData.productIds.map(id => ({ id })) },
//       total: orderData.total,
//       status: orderData.status || 'PENDING',
//     },
//     include: {
//       user: true,
//       products: true,
//     },
//   });
// };

// export const getAllOrders = async () => {
//   return await prisma.order.findMany({
//     include: {
//       user: true,
//       products: true,
//     },
//   });
// };

// export const getOrderById = async (id: string) => {
//   return await prisma.order.findUnique({
//     where: { id },
//     include: {
//       user: true,
//       products: true,
//     },
//   });
// };

// export const updateOrderStatus = async (id: string, status: OrderStatus) => {
//   return await prisma.order.update({
//     where: { id },
//     data: { status },
//     include: {
//       user: true,
//       products: true,
//     },
//   });
// };

// export const deleteOrder = async (id: string) => {
//   return await prisma.order.delete({
//     where: { id },
//   });
// };

// export const getOrdersByUserId = async (userId: string) => {
//   return await prisma.order.findMany({
//     where: { userId },
//     include: {
//       products: true,
//     },
//   });
// };





















import prisma from '../config/database';
import { Order, OrderStatus } from '@prisma/client';

export const createOrder = async (orderData: {
  userId: string;
  items: Array<{ productId: string; quantity: number; price: number }>;
  total: number;
  status?: OrderStatus;
}) => {
  return await prisma.$transaction(async (prisma) => {
    // First create the order
    const order = await prisma.order.create({
      data: {
        userId: orderData.userId,
        total: orderData.total,
        status: orderData.status || 'PENDING',
      },
    });

    // Then create all order items
    await prisma.orderItem.createMany({
      data: orderData.items.map(item => ({
        orderId: order.id,
        productId: item.productId,
        quantity: item.quantity,
        price: item.price,
      })),
    });

    // Finally return the complete order with all relations
    return await prisma.order.findUnique({
      where: { id: order.id },
      include: {
        user: true,
        items: {
          include: {
            product: true,
          },
        },
      },
    });
  });
};

export const getAllOrders = async () => {
  return await prisma.order.findMany({
    include: {
      user: true,
      items: {
        include: {
          product: true,
        },
      },
    },
  });
};

export const getOrderById = async (id: string) => {
  return await prisma.order.findUnique({
    where: { id },
    include: {
      user: true,
      items: {
        include: {
          product: true,
        },
      },
    },
  });
};

export const updateOrderStatus = async (id: string, status: OrderStatus) => {
  return await prisma.order.update({
    where: { id },
    data: { status },
    include: {
      user: true,
      items: {
        include: {
          product: true,
        },
      },
    },
  });
};

export const deleteOrder = async (id: string) => {
  // First delete all order items
  await prisma.orderItem.deleteMany({
    where: { orderId: id },
  });
  
  // Then delete the order
  return await prisma.order.delete({
    where: { id },
  });
};

export const getOrdersByUserId = async (userId: string) => {
  return await prisma.order.findMany({
    where: { userId },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  });
};