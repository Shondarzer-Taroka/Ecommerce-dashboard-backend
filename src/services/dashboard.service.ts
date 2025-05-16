import prisma from '../config/database';

export const getDashboardStats = async () => {
  const totalUsers = await prisma.user.count();
  const totalProducts = await prisma.product.count();
  const totalOrders = await prisma.order.count();
  const totalRevenue = await prisma.order.aggregate({
    _sum: { total: true },
  });

  const recentOrders = await prisma.order.findMany({
    take: 5,
    orderBy: { createdAt: 'desc' },
    include: {
      user: true,
      products: true,
    },
  });

  return {
    totalUsers,
    totalProducts,
    totalOrders,
    totalRevenue: totalRevenue._sum.total || 0,
    recentOrders,
  };
};