<script>
	const navItems = [
		{
			name: 'Home',
			href: '/'
		},
		{
			name: 'Blog',
			href: '/blog'
		},
		{
			name: 'Projects',
			href: '/projects'
		}
	];
</script>

<div class="nav-container">
	{#each navItems as item}
		<a class="nav-elements" href={item.href}>{item.name}</a>
	{/each}
</div>

<style>
	.nav-container {
		display: flex;
		gap: 50px;
		border-bottom: 2px solid black;
		padding-top: 1em;
		padding-bottom: 1em;
		padding-right: 1em;
		justify-content: flex-end;
	}
</style>
