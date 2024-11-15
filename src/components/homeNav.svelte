<script>
	import GradualUnderline from './GradualUnderline.svelte';
</script>

<div class="home-nav">
	<GradualUnderline text="About" color="#69369f" duration="0.5s" />
	<GradualUnderline text="Projects" color="#69369f" duration="0.5s" />
	<GradualUnderline text="Contact" color="#69369f" duration="0.5s" />
</div>

<style>
	.home-nav {
		margin-top: 48px;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
</style>
