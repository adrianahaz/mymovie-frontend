<script>
	const { title, form, children } = $props();
</script>

<div class="flex h-screen items-center justify-center">
	<form method="POST" class="w-full max-w-sm space-y-4 rounded-xl bg-[#1a1a1a] p-6 shadow">
		<h1 class="text-center text-2xl font-semibold">{title}</h1>

		{@render children()}

		{#if form?.error}
			<p class="text-center text-sm text-red-500">
				{form.error}
			</p>
		{/if}
	</form>
</div>
