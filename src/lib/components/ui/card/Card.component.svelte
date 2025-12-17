<script>
	const { movie } = $props();
</script>

<a href="/movie/detail/{movie.id}" class="relative w-48 shrink-0 bg-[#1a1a1a] p-3 hover:opacity-60">
	<img src={movie.poster} alt={movie.title} class="h-64 object-cover" />
</a>
