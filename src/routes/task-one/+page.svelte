<script>
	import StepOne from './steps/StepOne.svelte';
	import { steps, task } from './store/task';
	$: console.log($steps);
	$: console.log($task);
</script>

<main>
	<div>
		<h1>Task One</h1>
		<StepOne />
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 20dvh;
	}
	h1 {
		margin-bottom: 1rem;
		font-size: 2rem;
		text-align: center;
		padding: 1rem;
		border: 1px solid var(--muave);
		border-radius: var(--lg-br);
		color: var(--yellow);
		background-color: var(--crust);
	}
	div {
		padding: 2em;
		border: 2px solid var(--muave);
		border-radius: 20px;
		background-color: var(--mantle);
	}
	@media (max-width: 768px) {
		h1 {
			font-size: 1rem;
		}
	}
</style>
