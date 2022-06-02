<script>
	import '../style/index.css';
	import BackTop from '@/component/BackTop.svelte';
	import Header from '@/component/Header.svelte';
</script>

<svelte:head>
	<title>Torche Education</title>
</svelte:head>

<Header />
<BackTop />
<slot />
