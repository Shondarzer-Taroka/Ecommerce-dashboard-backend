// // src/middlewares/auth.middleware.ts
// import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';
// import prisma from '../config/database';
// import { User } from '@prisma/client';

// const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// declare global {
//   namespace Express {
//     interface Request {
//       user?: Omit<User, 'password'>;
//     }
//   }
// }

// export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const token = req.cookies.token;
    
//     if (!token) {
//       return res.status(401).json({ error: 'Authentication required' });
//     }

//     const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
//     const user = await prisma.user.findUnique({
//       where: { id: decoded.userId },
//       select: {
//         id: true,
//         name: true,
//         email: true,
//         role: true,
//         createdAt: true,
//         updatedAt: true
//       }
//     });

//     if (!user) {
//       return res.status(401).json({ error: 'Invalid token' });
//     }

//     req.user = user;
//     next();
//   } catch (error) {
//     res.status(401).json({ error: 'Invalid or expired token' });
//   }
// };