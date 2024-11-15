<script>
	export let text = 'Hover me!';
	export let color = '#000';
	export let duration = '0.3s';
</script>

<div>
	<span
		class="gradual-underline"
		style="--underline-color: {color}; --animation-duration: {duration};"
	>
		{text}
	</span>
</div>

<style>
	.gradual-underline {
		width: fit-content;
		width: auto;
		font-size: 28px;
		font-weight: lighter;
		text-align: center;
		position: relative;
		display: inline-block;
		cursor: pointer;
	}

	.gradual-underline::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: var(--underline-color, #000);
		transform: scaleX(0);
		transform-origin: bottom right;
		transition: transform var(--animation-duration, 0.3s) ease-out;
	}

	.gradual-underline:hover::after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
</style>
