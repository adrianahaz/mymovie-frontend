import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params, cookies }) {
	const token = cookies.get('token');
	const { id } = params;

	const response = await fetch(`http://localhost:8000/movie/detail/${id}`);

	if (!response.ok) {
		throw error(404, 'Movie tidak ditemukan 😢');
	}

	const result = await response.json();

	if (token) {
		fetch(`http://localhost:8000/movie/detail/${id}/click`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`
			}
		}).catch(() => {
			// sengaja di-silent
		});
	}

	return {
		movie: result
	};
}
