<script>
	import Header from '@/components/header.svelte';
	import '../global.css';
</script>

<Header />
<div>
	<slot />
</div>

<style>
	div {
		padding-left: 6em;
		padding-right: 6em;
	}
</style>
