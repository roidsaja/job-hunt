<script>
	import Header from '$lib/Header/Header.svelte';
	import Footer from '$lib/Footer/Footer.svelte';
</script>

<svelte:head>
	<meta name="robots" content="noindex" />
</svelte:head>

<Header />

<main>
	<slot />
</main>

<Footer />
