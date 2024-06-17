import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'postgres',
	password: 'alvan',
	port: 5432
});
