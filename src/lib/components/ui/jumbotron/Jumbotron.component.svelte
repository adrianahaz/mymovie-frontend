<script>
	const { posterUrl, posterHref } = $props();
</script>

<div class="w-full">
	<a href={posterHref} class="w-full">
		<img src={posterUrl} alt="" class="h-75 w-full rounded-lg object-cover" />
	</a>
</div>
