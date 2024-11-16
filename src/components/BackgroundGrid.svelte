<script>
	import { tweened } from 'svelte/motion';
	import { cubicInOut, linear } from 'svelte/easing';

	let breatheDuration = 5000;

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
</script>

<svg width="100%" height="100dvh" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="linGrad" gradientTransform="rotate(45)">
			<stop offset={`${$sweep < 20 ? 0 : $sweep - 20}%`} stop-color="black" />
			<stop offset={`${$sweep < 10 ? 0 : $sweep - 10}%`} stop-color="white" />
			<stop offset={`${$sweep}%`} stop-color="black" />
		</linearGradient>
		<mask id="linGradMask">
			<rect width="200%" height="200%" fill="url(#linGrad)" />
		</mask>
		<linearGradient id="bottom-fade">
			<stop offset="5%" stop-color="black" />
			<stop offset="95%" stop-color="white" />
		</linearGradient>
		<mask id="bottom-fade-mask">
			<rect width="100%" height="100%" fill="bottom-fade-mask" />
		</mask>
	</defs>
</svg>

<div class="background-grid" style="opacity: {$opacity}" />

<style>
	svg {
		position: absolute;
		left: 0px;
		top: 0px;
	}
	.background-grid {
		top: 0;
		left: 0;
		height: 100dvh;
		width: 100%;
		position: absolute;
		background-size: 3.5dvh 3.5dvh;
		background-image: linear-gradient(to right, #8878b9 1px, transparent 1px),
			linear-gradient(to bottom, #8878b9 1px, transparent 1px);
		mask-image: url(#linGradMask);
		-webkit-mask-image: url(#linGradMask);
		z-index: -1;
	}
	svg {
		position: absolute;
		left: 0px;
		top: 0px;
		pointer-events: none;
	}
</style>
