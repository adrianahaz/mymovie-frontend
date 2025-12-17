import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
	const token = cookies.get('token');

	if (token) {
		throw redirect(302, '/');
	}
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, cookies, fetch }) => {
		const formData = await request.formData();
		const email = formData.get('email');
		const password = formData.get('password');

		const response = await fetch('http://localhost:8000/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email, password })
		});

		if (!response.ok) {
			return fail(400, {
				error: 'Email atau password salah'
			});
		}

		const result = await response.json();

		const token = result.access_token;

		cookies.set('token', token, {
			path: '/',
			httpOnly: true,
			secure: false
		});

		throw redirect(302, '/');
	}
};
