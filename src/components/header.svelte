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
		padding-top: 1em;
		padding-bottom: 1em;
		padding-right: 1em;
		justify-content: flex-end;
		font-weight: bold;
		background-color: var(--mantle);
	}
	a:visited,
	a:link {
		color: inherit;
		text-decoration: none;
	}
</style>
