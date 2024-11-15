<script lang="ts">
	import MadeWithSvelte from '@/components/MadeWithSvelte.svelte';
	import InstagramIcon from '@/components/InstagramIcon.svelte';
	import GithubIcon from '@/components/GithubIcon.svelte';
	import EmailIcon from '@/components/EmailIcon.svelte';
	import LinkedInIcon from '@/components/LinkedInIcon.svelte';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicInOut, linear } from 'svelte/easing';

	import BackgroundGrid from '@/components/BackgroundGrid.svelte';
	let showTransitions = false;
	let breatheDuration = 5000;

	onMount(() => {
		showTransitions = true;
	});

	const sweep = tweened(0, {
		duration: breatheDuration,
		easing: linear
	});

	$: {
		if ($sweep === 0) {
			sweep.set(100, { duration: breatheDuration, easing: linear });
		} else if ($sweep === 100) {
			sweep.set(0, { duration: 10, easing: linear });
		}
	}
	const opacity = tweened(0.2, {
		duration: breatheDuration,
		easing: cubicInOut
	});

	$: {
		if ($opacity === 0.2) {
			opacity.set(0.4);
		} else if ($opacity === 0.4) {
			opacity.set(0.2);
		}
	}
</script>

<main>
	<BackgroundGrid />
	{#if showTransitions}
		<MadeWithSvelte />
		<div class="primary-content">
			<div class="header">
				<h transition:fade={{ duration: 1000 }}>Alvan Tom</h>
				<h1><span style="color: #69369F">Front-End Developer </span>based in 🇨🇦</h1>
				<div class="icon-list">
					<LinkedInIcon />
					<GithubIcon />
					<EmailIcon />
					<InstagramIcon />
				</div>
			</div>
			<img class="pfp" src="src/img/pfp.jpg" alt="alvan-profile" />
		</div>
	{/if}
</main>
<p>great things are in the making...</p>

<style>
	@import './styles.css';
</style>
