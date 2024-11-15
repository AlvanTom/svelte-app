<script>
	import SvelteLogo from '@/components/SvelteLogo.svelte';
	import { fade } from 'svelte/transition';
</script>

<div class="made-with" transition:fade={{ duration: 1000 }}>
	<p>Made with&nbsp</p>
	<SvelteLogo />
</div>

<style>
	.made-with {
		margin-right: 3.5dvh;
		align-self: flex-end;
		display: flex;
		align-items: center;
		font-weight: lighter;
		font-size: 2.5dvh;
	}
</style>
