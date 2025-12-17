<script>
	import { setContext } from 'svelte';
	import Home from '$lib/components/pages/home/Home.component.svelte';

	const { data } = $props();

	setContext('movies', () => data.movies);
	setContext('animationMovies', () => data.animationMovies);
	setContext('recommendations', () => data.recommendations);
</script>

<Home isLoggedIn={data.isLoggedIn} />
