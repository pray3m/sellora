import { PrismaClient } from "../../../generated/prisma";

const globalForPrisma = globalThis as unknown as {
  prismadb?: PrismaClient;
};

export const prisma =
  globalForPrisma.prismadb ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development" ? ["query", "error"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prismadb = prisma;

export default prisma;
