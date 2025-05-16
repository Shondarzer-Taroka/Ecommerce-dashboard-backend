 
import { Request, Response } from 'express';
import { DashboardService } from '../services/dashboard.service';

export class DashboardController {
  private dashboardService: DashboardService;

  constructor() {
    this.dashboardService = new DashboardService();
  }

  getSummary = async (req: Request, res: Response) => {
    try {
      const summary = await this.dashboardService.getSummary();
      res.json(summary);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  getRecentOrders = async (req: Request, res: Response) => {
    try {
      const limit = parseInt(req.query.limit as string) || 10;
      const orders = await this.dashboardService.getRecentOrders(limit);
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  getUserStatistics = async (req: Request, res: Response) => {
    try {
      const stats = await this.dashboardService.getUserStatistics();
      res.json(stats);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
}