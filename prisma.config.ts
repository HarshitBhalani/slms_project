import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    seed: 'node prisma/seed.js',
    path: "prisma/migrations",
  },
  datasource: {
    url:"mongodb+srv://harshitbhalani187_db_user:Ab4Usvv6SnVsropo@slmscluster.phmyf4m.mongodb.net/slms?appName=slmsCluster",
  },
});
