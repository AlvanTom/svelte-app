export async function load({ fetch }) {
	const res = await fetch('/api');
	const users = await res.json();
	return { users };
}
