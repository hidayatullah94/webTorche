<script context="module">
	import PureCounter from '@srexi/purecounterjs';
	const pure = new PureCounter();
	import { onMount } from 'svelte';
</script>

<script>
	onMount(() => {
		new PureCounter({
			// Setting that can't' be overriden on pre-element
			selector: '.purecounter', // HTML query selector for spesific element
			// Settings that can be overridden on per-element basis, by `data-purecounter-*` attributes:
			start: 0, // Starting number [uint]
			end: 100, // End number [uint]
			duration: 2, // The time in seconds for the animation to complete [seconds]
			delay: 10, // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]
			once: true, // Counting at once or recount when the element in view [boolean]
			pulse: false, // Repeat count for certain time [boolean:false|seconds]
			decimals: 0, // How many decimal places to show. [uint]
			legacy: true, // If this is true it will use the scroll event listener on browsers
			filesizing: false, // This will enable/disable File Size format [boolean]
			currency: false, // This will enable/disable Currency format. Use it for set the symbol too [boolean|char|string]
			formater: 'us-US', // Number toLocaleString locale/formater, by default is "en-US" [string|boolean:false]
			separator: false // This will enable/disable comma separator for thousands. Use it for set the symbol too [boolean|char|string]
		});
	});
</script>

<!-- ======= Why Us Section ======= -->
<section id="why-us">
	<div class="container" data-aos="fade-up">
		<header class="section-header ">
			<h3>Why TORCHE?</h3>
			<p>
				Not only giving the best process engineering curriculum, we also provides services that our
				competitors can't provide.
			</p>
		</header>

		<div class="row row-eq-height justify-content-center">
			<div class="col-lg-4 mb-4">
				<div class="card" data-aos="zoom-in" data-aos-delay="100">
					<i class="bi bi-calendar4-week" />
					<div class="card-body">
						<h5 class="card-title">Flexible Time</h5>
						<p class="card-text">Based on agreement between member and tutor.</p>
						<!-- <a href="#" class="readmore">Read more </a> -->
					</div>
				</div>
			</div>

			<div class="col-lg-4 mb-4">
				<div class="card" data-aos="zoom-in" data-aos-delay="200">
					<i class="bi bi-camera-reels" />
					<div class="card-body">
						<h5 class="card-title">Free Class Recordings</h5>
						<p class="card-text">With no additional cost.</p>
						<!-- <a href="#" class="readmore">Read more </a> -->
					</div>
				</div>
			</div>

			<div class="col-lg-4 mb-4">
				<div class="card" data-aos="zoom-in" data-aos-delay="300">
					<i class="bi bi-chat-square-text" />
					<div class="card-body">
						<h5 class="card-title">After-class Consultation</h5>
						<p class="card-text">
							Valid for 7 days after completing the course by joining our Discord server
						</p>
						<!-- <a href="#" class="readmore">Read more </a> -->
					</div>
				</div>
			</div>
		</div>

		<div class="row counters" data-aos="fade-up" data-aos-delay="100">
			<div class="col-lg-3 col-6 text-center">
				<span
					data-purecounter-start="0"
					data-purecounter-end="864"
					data-purecounter-duration="1"
					class="purecounter"
				/>
				<p>Unique Students*</p>
			</div>

			<div class="col-lg-3 col-6 text-center">
				<span
					data-purecounter-start="0"
					data-purecounter-end="1552"
					data-purecounter-duration="1"
					class="purecounter"
				/>
				<p>Classes*</p>
			</div>

			<div class="col-lg-3 col-6 text-center">
				<span>9/10</span>
				<p>Ratings from students*</p>
			</div>

			<div class="col-lg-3 col-6 text-center">
				<span
					data-purecounter-start="0"
					data-purecounter-end="22"
					data-purecounter-duration="1"
					class="purecounter"
				/>
				<p>High Quality Tutors</p>
			</div>
		</div>
		<div class="row counters" data-aos="fade-up">
			<div class="col-lg-12 col-12 text-center">
				<p>*data from 2021</p>
			</div>
		</div>
	</div>
</section>
<!-- End Why Us Section -->
