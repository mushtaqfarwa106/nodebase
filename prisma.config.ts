import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // We use the direct URL here to avoid pooler issues during setup
    url: process.env.DIRECT_URL,
  },
});
