<script>
	export let name = '';
	export let link = '';
	export let linkOne = '';
	export let linkTwo = '';
	export let linkThree = '';
</script>

<!-- ======= Breadcrumbs Section ======= -->
<section class="breadcrumbs">
	<div class="container">
		<div class="d-flex justify-content-between align-items-center">
			<h2>{name}</h2>
			<ol>
				<li><a href={link}>{linkOne}</a></li>
				<li>{linkTwo}</li>
				<li>{linkThree}</li>
			</ol>
		</div>
	</div>
</section>
<!-- End Breadcrumbs Section -->
