const { PrismaClient } = require('@prisma/client');

// Prisma 7.2.0 ke liye correct syntax
const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL
});

async function main() {
  console.log("🧹 Cleaning old data...");
  await prisma.user.deleteMany({});

  console.log("🌱 Seeding new data...");
  const user = await prisma.user.create({
    data: {
      fullName: "Harshit Bhalani",
      companyName: "SLMS Project",
      designation: "Manager",
      role: "Manager",
      mobileNumber: "9876543210",
      email: "admin@test.com",
      password: "123456",
      country: "India",
      isConfirmed: true,
      vendorApproved: true,
    },
  });

  console.log("✅ Seed Success! Created:", user.email);
}

main()
  .catch((e) => {
    console.error("❌ Error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });