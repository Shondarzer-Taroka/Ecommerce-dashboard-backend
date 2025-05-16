 
import { Response } from 'express';
import { Prisma } from '@prisma/client';

export const handleError = (res: Response, error: unknown) => {
  if (error instanceof Error) {
    res.status(400).json({ error: error.message });
  } else if (error instanceof Prisma.PrismaClientKnownRequestError) {
    res.status(400).json({ error: error.message });
  } else {
    res.status(500).json({ error: 'Internal server error' });
  }
};