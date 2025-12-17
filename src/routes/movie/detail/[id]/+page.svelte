<script>
	const { data } = $props();
	const { movie } = data;

	// genre string → array
	const genres = movie.genre.split(',').map((g) => g.trim());
</script>

<div class="mx-auto max-w-5xl px-6 py-10">
	<a href="/" class="mb-6 inline-block text-sm text-gray-400 hover:underline"> ← Kembali </a>

	<div class="grid gap-8 md:grid-cols-3">
		<!-- POSTER -->
		<img src={movie.poster} alt={movie.title} class="w-full rounded-xl object-cover shadow" />

		<!-- INFO -->
		<div class="space-y-4 md:col-span-2">
			<h1 class="text-3xl font-bold">{movie.title}</h1>

			<p class="text-sm text-gray-400">
				{movie.year} • 🎬 {movie.director}
			</p>

			<!-- IMDb -->
			<p class="text-sm text-yellow-400">
				⭐ {movie.imdb_rating} / 10
				<span class="text-gray-400">
					({movie.imdb_votes} votes)
				</span>
			</p>

			<!-- GENRE -->
			<div class="flex flex-wrap gap-2">
				{#each genres as genre}
					<span class="rounded bg-gray-200 px-3 py-1 text-xs text-black">
						{genre}
					</span>
				{/each}
			</div>

			<!-- ACTORS -->
			<p class="text-sm text-gray-300">
				<span class="font-semibold text-white">Actors:</span>
				{movie.actors}
			</p>

			<!-- PLOT -->
			<p class="leading-relaxed text-gray-300">
				{movie.plot}
			</p>
		</div>
	</div>
</div>
