<script>
	import NavbarLogo from './NavbarLogo.component.svelte';
	import Button from '$lib/components/ui/button/Button.component.svelte';

	const { isLoggedIn } = $props();
</script>

<nav class="flex items-center justify-between">
	<NavbarLogo />

	{#if !isLoggedIn}
		<!-- content here -->
		<Button label="Login" type="link" href="/auth/login/" />
	{:else}
		<span class="hidden md:block">Hello, viewers!</span>
	{/if}
</nav>
