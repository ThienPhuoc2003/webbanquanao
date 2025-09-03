import { PrismaClient } from '@prisma/client';
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

async function main() {
  // 🧑 user mẫu
await prisma.user.create({
  data: {
    name: "Admin",
    email: "admin@example.com",
    hashedPassword: await bcrypt.hash("123456", 10), // ⚠ phải hash
  },
});

  // 👕 product mẫu
  await prisma.product.create({
    data: {
      name: "Áo thun trắng",
      description: "Áo thun chất liệu cotton",
      price: 199000,
      brand: "LuxeGlobal",
      category: "Clothing",
      inStock: true,
      images: [
        {
          color: "white",
          colorCode: "#ffffff",
          image: "https://via.placeholder.com/200"
        }
      ]
    }
  });
}

main()
  .then(() => console.log("✅ Database seeded!"))
  .catch(e => console.error(e))
  .finally(async () => prisma.$disconnect());