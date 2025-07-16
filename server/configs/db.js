import neon from '@neondatabase/serverless';
const sql = postgres(`${process.env.DATABASE_URL}`);
export default sql;