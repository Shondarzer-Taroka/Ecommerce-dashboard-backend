 
// import jwt from 'jsonwebtoken';
// import { Request, Response, NextFunction } from 'express';
// import { Role } from '@prisma/client';

// const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// export const generateToken = (userId: string, role: Role) => {
//   return jwt.sign({ userId, role }, JWT_SECRET, { expiresIn: '1d' });
// };

// export const authenticate = (req: Request, res: Response, next: NextFunction) => {
//   const token = req.header('Authorization')?.replace('Bearer ', '');

//   if (!token) {
//     return res.status(401).json({ error: 'Authentication required' });
//   }

//   try {
//     const decoded = jwt.verify(token, JWT_SECRET) as { userId: string; role: Role };
//     req.user = decoded;
//     next();
//   } catch (error) {
//     res.status(401).json({ error: 'Invalid token' });
//   }
// };

// export const authorize = (roles: Role[]) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     if (!roles.includes(req.user.role)) {
//       return res.status(403).json({ error: 'Unauthorized access' });
//     }
//     next();
//   };
// };




// src/utils/auth.ts
import jwt from 'jsonwebtoken';
import { Response, NextFunction } from 'express';
import { Role } from '@prisma/client';
import { AuthenticatedRequest } from '../types/custom-types';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export const generateToken = (userId: string, role: Role) => {
  return jwt.sign({ userId, role }, JWT_SECRET, { expiresIn: '1d' });
};

export const authenticate = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as {
      userId: string;
      role: Role;
    };
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

export const authorize = (roles: Role[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Unauthorized access' });
    }
    next();
  };
};
