 
import { Router } from 'express';
import userRoutes from './user.routes';
import productRoutes from './product.routes';
import orderRoutes from './order.routes';
import dashboardRoutes from './dashboard.routes';
import { authenticate, authorize } from '../utils/auth';

const router = Router();

router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/orders', authenticate, orderRoutes);
router.use('/dashboard', authenticate, authorize(['ADMIN']), dashboardRoutes);

export default router;