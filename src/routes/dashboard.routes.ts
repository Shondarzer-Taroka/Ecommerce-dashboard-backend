 
// import { Router } from 'express';
// import { DashboardController } from '../controllers/dashboard.controller';
// import { authenticate } from '../utils/auth';

// const router = Router();
// const dashboardController = new DashboardController();

// router.get('/summary', authenticate, dashboardController.getSummary);
// router.get('/recent-orders', authenticate, dashboardController.getRecentOrders);
// router.get('/user-stats', authenticate, dashboardController.getUserStatistics);

// export default router;








import { Router } from 'express';
import { getStats } from '../controllers/dashboard.controller';

const router = Router();

router.get('/stats', getStats);

export default router;