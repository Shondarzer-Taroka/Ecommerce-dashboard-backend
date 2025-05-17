// src/types/prisma-extensions.ts
import { OrderStatus, Prisma } from '@prisma/client';

export type OrderWithItemsAndProducts = Prisma.OrderGetPayload<{
  include: {
    user: true;
    items: {
      include: {
        product: true;
      };
    };
  };
}>;

export type OrderCreateInput = {
  userId: string;
  items: Array<{
    productId: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  status?: OrderStatus;
};