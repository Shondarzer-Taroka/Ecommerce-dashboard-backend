// src/types/prisma-extensions.d.ts
import { Prisma } from '@prisma/client';

declare module '@prisma/client' {
  interface PrismaClient {
    $transaction<P extends Promise<any>[]>(
      promises: [...P],
      options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
    ): Promise<UnwrapTuple<P>>;
  }
}

type UnwrapTuple<T extends any[]> = {
  [K in keyof T]: T[K] extends Promise<infer U> ? U : T[K];
};

