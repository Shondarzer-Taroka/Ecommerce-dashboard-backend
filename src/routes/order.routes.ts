 
import { Router } from 'express';
import {
  createOrder,
  getAllOrders,
  getOrder,
  updateOrderStatus,
  deleteOrder,
  getUserOrders,
} from '../controllers/order.controller';

const router = Router();

router.post('/', createOrder);
router.get('/', getAllOrders);
router.get('/:id', getOrder);
router.put('/:id/status', updateOrderStatus);
router.delete('/:id', deleteOrder);
router.get('/user/:userId', getUserOrders);

export default router;