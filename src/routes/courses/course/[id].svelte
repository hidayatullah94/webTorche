<script context="module">
	// @ts-ignore
	export const load = async ({ params, fetch }) => {
		const id = params.id;
		const res = await fetch(`/api/tutors/${id}`);
		const tutor = await res.json();
		console.log(tutor);

		return {
			props: {
				tutor
			}
		};
	};
</script>
