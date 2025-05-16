 
import { Router } from 'express';
import {
  register,
  login,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} from '../controllers/user.controller';
import { authenticate, authorize } from '../utils/auth';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/', authenticate, authorize(['ADMIN']), getAllUsers);
router.get('/:id', authenticate, getUser);
router.put('/:id', authenticate, updateUser);
router.delete('/:id', authenticate, authorize(['ADMIN']), deleteUser);

export default router;