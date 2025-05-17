// // src/types/express/index.d.ts
// import { Role } from '@prisma/client';

// declare global {
//   namespace Express {
//     interface Request {
//       user?: {
//         userId: string;
//         role: Role;
//       };
//     }
//   }
// }




import { Role } from '@prisma/client';
import { Request } from 'express';

declare module 'express' {
  interface Request {
    user?: {
      userId: string;
      role: Role;
    };
  }
}