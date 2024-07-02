<script>
	import Header from '@/components/header.svelte';
	import '../global.css';
</script>

<div>
	<Header />
	<slot />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}
	@media (max-width: 768px) {
		div {
			flex-direction: column-reverse;
		}
	}
</style>
