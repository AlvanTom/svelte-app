<script>
	export let data;
	console.log(data);
</script>

<main>
	<h1>svelte is being written...</h1>
</main>

<style>
	main {
		display: flex;
		flex: 1;
		justify-content: center;
		align-items: center;
	}
	h1 {
		margin-top: 0.5em;
		font-size: 2rem;
	}
	@media (max-width: 768px) {
		h1 {
			font-size: 1rem;
		}
	}
</style>
