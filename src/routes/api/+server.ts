import { json } from '@sveltejs/kit';
import { pool } from '@/lib/server/db';
export async function GET() {
	try {
		const res = await pool.query('select version()');
		return json(res);
	} catch (err) {
		console.log(err);
		return json(err);
	}
}
