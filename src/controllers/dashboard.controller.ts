import { Request, Response } from 'express';
import * as dashboardService from '../services/dashboard.service';
import { handleError } from '../utils/error-handler';

export const getStats = async (req: Request, res: Response) => {
  try {
    const stats = await dashboardService.getDashboardStats();
    res.json(stats);
  } catch (error) {
    handleError(res, error);
  }
};