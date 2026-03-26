// import { PrismaClient } from "@prisma/client";
import {PrismaClient} from "@prisma/client"
import {PrismaPg} from "@prisma/adapter-pg"
const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    // Use 'datasourceUrl' (singular) for Prisma 7
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;