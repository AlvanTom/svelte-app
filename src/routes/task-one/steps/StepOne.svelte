<script lang="ts">
	import { task, steps } from '../store/task.ts';
	let name = '';
	let selectHours: Number[] = [];
	let selectMinutes: Number[] = [];
	let hours = 0;
	let minutes = 0;
	for (let i = 0; i < 7; i++) {
		selectHours = [...selectHours, i];
	}
	for (let i = 0; i < 4; i++) {
		selectMinutes = [...selectMinutes, i * 15];
	}
	function handleFormSubmission() {
		// task.set({ name, duration: hours * 60 + minutes });
		$task = { name, duration: hours * 60 + minutes };
		$steps = 2;
		console.log($task);
		console.log($steps);
	}
</script>

<form>
	<div class="question-group">
		<div class="question">
			<h2>What is the most important task you want done today?</h2>
			<input bind:value={name} placeholder="conquer the world 😈" />
		</div>
		<div class="question">
			<h2>How long will it take to get done?</h2>
			<div class="duration">
				Hours:
				<select bind:value={hours}>
					{#each selectHours as hours}
						<option value={hours}>{hours}</option>
					{/each}
				</select>
				Minutes:
				<select bind:value={minutes}>
					{#each selectMinutes as minutes}
						<option value={minutes}>{minutes}</option>
					{/each}
				</select>
			</div>
		</div>
	</div>
	<button on:click={handleFormSubmission}>Ready to start my task!</button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
	}
	.question {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.duration {
		margin-top: 0.5em;
	}
	.question-group {
		margin: 1em 0em;
		display: flex;
		flex-direction: column;
		gap: 1em;
	}
	input {
		all: unset;
		background-color: var(--crust);
		padding: 0.5em;
		border-radius: var(--lg-br);
		margin-top: 0.5em;
		text-align: center;
		min-width: 240px;
	}
	input:focus {
		box-shadow:
			0 8px 16px rgba(0, 0, 0, 0.2),
			0 12px 40px rgba(0, 0, 0, 0.2);
		border: 1px solid var(--muave);
	}
	button {
		all: unset;
		background-color: var(--crust);
		padding: 0.5em 1em;
		border: 1px solid var(--muave);
		border-radius: var(--lg-br);
		margin-top: 0.5em;
		text-align: center;
		transition: box-shadow 0.1s ease-in-out;
	}
	button:hover {
		box-shadow:
			0 8px 16px rgba(0, 0, 0, 0.3),
			0 12px 40px rgba(0, 0, 0, 0.3);
	}
</style>
