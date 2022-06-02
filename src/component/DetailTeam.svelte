<script>
	export let photo = '';
	export let title = '';
	export let name = '';
</script>

<img src={photo} alt="img-team" class="img-fluid rounded-circle mb-3" style="width: 12.5rem;" />
<p class="fw-bold mb-0">{title}</p>
<p>{name}</p>
