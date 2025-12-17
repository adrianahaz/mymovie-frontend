<script>
	import { getContext } from 'svelte';
	import Card from '../card/Card.component.svelte';

	const { sectionTitle, sectionDetail, movies } = $props();
</script>

<section class="flex flex-col gap-3">
	<div class="flex items-center justify-between">
		<h2 class="text-lg font-bold">{sectionTitle}</h2>

		{#if sectionDetail}
			<!-- content here -->
			<span><a href={sectionDetail} class="hover:text-[#ffffff]">Selengkapnya -></a></span>
		{/if}
	</div>

	<div class="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth">
		{#each movies as movie (movie.id)}
			<Card {movie} />
		{/each}
	</div>
</section>

<style>
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}
	.no-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
