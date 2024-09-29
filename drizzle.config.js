/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.jsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://expenses-tracker_owner:4UgOHN0zikMd@ep-lingering-sun-a5udqsdl.us-east-2.aws.neon.tech/expenses-tracker?sslmode=require',
    }
  };