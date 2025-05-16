 
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class DashboardService {
  async getSummary() {
    const totalUsers = await prisma.user.count();
    const totalProducts = await prisma.product.count();
    const totalOrders = await prisma.order.count();
    const revenue = await prisma.order.aggregate({
      _sum: {
        total: true,
      },
      where: {
        status: 'DELIVERED',
      },
    });

    return {
      totalUsers,
      totalProducts,
      totalOrders,
      revenue: revenue._sum.total || 0,
    };
  }

  async getRecentOrders(limit: number = 10) {
    return prisma.order.findMany({
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
        items: {
          include: {
            product: {
              select: {
                name: true,
                price: true,
              },
            },
          },
        },
      },
    });
  }

  async getUserStatistics() {
    const userCountByRole = await prisma.user.groupBy({
      by: ['role'],
      _count: {
        role: true,
      },
    });

    return {
      userCountByRole,
    };
  }
}