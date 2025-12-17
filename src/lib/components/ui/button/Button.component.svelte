<script>
	const { label, type, href } = $props();
	const className = 'border px-4 py-2 rounded hover:bg-gray-200 hover:text-[#141414]';
</script>

{#if type === 'link'}
	<a class={className} {href}>{label}</a>
{:else}
	<button class={className}>{label}</button>
{/if}
