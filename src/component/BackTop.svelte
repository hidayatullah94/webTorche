<script>
	import { ArrowUpShort } from 'svelte-bootstrap-icons';

	export let buttonVisibleOnPX = 200;
	let hidden = true;

	const goStart = () => {
		document.body.scrollIntoView();
	};

	const scrollElement = () => {
		return document.documentElement || document.body;
	};

	const handleOnScroll = () => {
		if (scrollElement().scrollTop > buttonVisibleOnPX) {
			hidden = false;
		} else {
			hidden = true;
		}
	};
</script>

<svelte:window on:scroll={handleOnScroll} />

<div class="back_to_start" on:click={goStart} class:hidden>
	<ArrowUpShort width={30} height={30} />
</div>

<style>
	.back_to_start {
		opacity: 1;
		transition: opacity 0.5s, visibility 0.5s;
		position: fixed;
		z-index: 99;
		right: 20px;
		user-select: none;
		bottom: 20px;
		color: #fff;
		background: #007bff;
		border-radius: 50%;
		width: 40px;
		height: 40px;
		transition: all 0.4s;
		text-align: center;
		padding-top: 5px;
	}

	.back_to_start.hidden {
		opacity: 0;
		visibility: hidden;
	}
	.back_to_start {
		background: #2990ff;
		color: #fff;
	}
</style>
