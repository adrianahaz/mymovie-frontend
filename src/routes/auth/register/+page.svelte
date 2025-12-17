<script>
	import Auth from '$lib/components/pages/auth/Auth.component.svelte';

	const { form } = $props();
</script>

<Auth title="Register" {form}>
	{#snippet children()}
		<input
			type="email"
			name="email"
			placeholder="Email"
			required
			class="w-full rounded border px-3 py-2"
		/>

		<input
			type="password"
			name="password"
			placeholder="Password"
			required
			class="w-full rounded border px-3 py-2"
		/>

		<button type="submit" class="w-full rounded bg-black py-2 text-white hover:opacity-90">
			Daftar
		</button>
	{/snippet}
</Auth>
