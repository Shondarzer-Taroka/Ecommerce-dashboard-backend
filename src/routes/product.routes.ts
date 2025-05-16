 
import { Router } from 'express';
import {
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/product.controller';
import { authenticate, authorize } from '../utils/auth';

const router = Router();

router.post('/', authenticate, authorize(['ADMIN']), createProduct);
router.get('/', getAllProducts);
router.get('/:id', getProduct);
router.put('/:id', authenticate, authorize(['ADMIN']), updateProduct);
router.delete('/:id', authenticate, authorize(['ADMIN']), deleteProduct);

export default router;
