<script>
	import Header from 'src/components/Header/Header.svelte';
	import Footer from 'src/components/Footer/Footer.svelte';
</script>

<svelte:head>
	<meta name="robots" content="noindex" />
</svelte:head>

<Header />

<main>
	<slot />
</main>

<Footer />
