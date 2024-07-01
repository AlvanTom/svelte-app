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

<div class="header">
	Stabletables
	<div class="nav-container">
		{#each navItems as item}
			<a class="nav-elements" href={item.href}>{item.name}</a>
		{/each}
	</div>
</div>

<style>
	.nav-container {
		display: flex;
		gap: 50px;
		font-weight: bold;
	}
	.header {
		padding-top: 1em;
		padding-bottom: 1em;
		padding-right: 4em;
		padding-left: 4em;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		font-size: x-large;
		font-weight: bold;
		background-color: var(--mantle);
	}
	a:visited,
	a:link {
		color: inherit;
		text-decoration: none;
	}
</style>
