<script>
	import { getContext } from 'svelte';
	import Navbar from '$lib/components/ui/navbar/Navbar.component.svelte';
	import Jumbotron from '$lib/components/ui/jumbotron/Jumbotron.component.svelte';
	import Section from '$lib/components/ui/section/Section.component.svelte';

	const { isLoggedIn } = $props();

	const movies = getContext('movies');
	const animationMovies = getContext('animationMovies');
	const recommendations = getContext('recommendations');
	const movieList = movies();
	const animationMovieList = animationMovies();
	const recommendedMovies = recommendations();
	const jumbotron = {
		posterUrl:
			'https://lacountylibrary.org/wp-content/uploads/2018/07/landscape-1522924460-avengers-infinity-war-poster.jpg',
		posterHref: '/movie/detail/298'
	};
</script>

<header>
	<Navbar {isLoggedIn} />
</header>

<main class="my-5 flex flex-col gap-5">
	<Jumbotron posterUrl={jumbotron.posterUrl} posterHref={jumbotron.posterHref} />

	{#if recommendedMovies}
		<Section sectionTitle="Berdasarkan minat mu" movies={recommendedMovies} />
	{/if}

	<div>
		<Section sectionTitle="Pilihan Film" sectionDetail="/movie/" movies={movieList} />
	</div>

	<div>
		<Section
			sectionTitle="Film Animasi"
			sectionDetail="/movie/genre/animation"
			movies={animationMovieList}
		/>
	</div>
</main>
