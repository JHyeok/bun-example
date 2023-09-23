import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

await prisma.user.create({
  data: {
    name: "Kim JaeHyeok",
    email: `dev.jhyeok-${Math.random()}@gmail.com`
  }
})

const userCount = await prisma.user.count();
console.log(`userCount: ${userCount}`);
