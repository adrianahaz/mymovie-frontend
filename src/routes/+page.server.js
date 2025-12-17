/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, cookies }) {
	const token = cookies.get('token');
	const [allRes, animationGenRes] = await Promise.all([
		fetch('http://localhost:8000/movies'),
		fetch('http://localhost:8000/movie/genre/animation')
	]);

	const allMovies = await allRes.json();
	const animationMovies = await animationGenRes.json();

	let recommendations = [];

	if (token) {
		const recRes = await fetch('http://localhost:8000/movie/recommendations', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});

		if (recRes.ok) {
			const recJson = await recRes.json();
			recommendations = recJson ?? [];
		}
	}

	return {
		movies: allMovies.data,
		animationMovies: animationMovies.data,
		recommendations: recommendations.data
	};
}
