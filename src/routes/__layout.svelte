<script context="module">
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import { onMount } from 'svelte';
</script>

<script>
	import '../style/index.css';
	import BackTop from '@/component/BackTop.svelte';
	import Header from '@/component/Header.svelte';

	onMount(() => {
		AOS.init();
		AOS.refresh();
	});
</script>

<svelte:head>
	<title>Torche Education</title>
</svelte:head>

<Header />
<BackTop />
<slot />
