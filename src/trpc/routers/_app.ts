import { baseProcedure, createTRPCRouter, protectedProcedure } from '../init';
import { prisma } from '@/lib/db';

export const appRouter = createTRPCRouter({
    getUsers: protectedProcedure.query(async ({ ctx }) => {
        // This userId comes from your Better Auth session in context
        return await prisma.account.findMany({
            where: {
                userId: ctx.auth.user.id,
            },
        });
    }),
});

export type AppRouter = typeof appRouter;