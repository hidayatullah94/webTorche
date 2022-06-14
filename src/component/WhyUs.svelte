<script>
	// @ts-ignore
	import Counter from 'svelte-counter';
	import { inview } from 'svelte-inview';

	let counters = {
		Students: 864,
		Classes: 1552,
		Tutors: 22
	};

	let startCounter = false;
</script>

<!-- ======= Why Us Section ======= -->
<section id="why-us">
	<div class="container" data-aos="fade-up">
		<header class="section-header">
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

		<div
			use:inview
			on:change={({ detail }) => {
				startCounter = !startCounter && detail.inView;
			}}
		>
			{#if startCounter}
				<Counter values={counters} duration="2000" random="false" minspeed="100" let:counterResult>
					<div class="row counters" data-aos="fade-up" data-aos-delay="100">
						<div class="col-lg-3 col-6 text-center">
							<span>{counterResult.Students}</span>
							<p>Unique Students*</p>
						</div>

						<div class="col-lg-3 col-6 text-center">
							<span>{counterResult.Classes}</span>
							<p>Classes*</p>
						</div>

						<div class="col-lg-3 col-6 text-center">
							<span>9/10</span>
							<p>Ratings from students*</p>
						</div>

						<div class="col-lg-3 col-6 text-center">
							<span>{counterResult.Tutors}</span>
							<p>High Quality Tutors</p>
						</div>
					</div>
				</Counter>
			{/if}
		</div>

		<div class="row counters" data-aos="fade-up">
			<div class="col-lg-12 col-12 text-center">
				<p>*data from 2021</p>
			</div>
		</div>
	</div>
</section>

<!-- End Why Us Section -->
<style>
	#why-us {
		padding: 60px 0;
		background: #121d42;
	}
	#why-us .section-header h3,
	#why-us .section-header p {
		color: #fff;
	}
	#why-us .card {
		background: #0b122a;
		border-color: #0b122a;
		border-radius: 10px;
		margin: 0 15px;
		padding: 15px 0;
		text-align: center;
		color: #fff;
		transition: 0.3s ease-in-out;
		height: 100%;
	}
	@media (max-width: 991px) {
		#why-us .card {
			margin: 0;
		}
	}
	#why-us .card:hover {
		background: #5885e9;
		border-color: #5885e9;
	}
	#why-us .card i {
		font-size: 48px;
		padding-top: 15px;
		color: #bfddfe;
	}
	#why-us .card h5 {
		font-size: 22px;
		font-weight: 600;
	}
	#why-us .card p {
		font-size: 15px;
		color: #d8eafe;
	}

	#why-us .counters {
		padding-top: 40px;
	}
	#why-us .counters span {
		font-family: 'Rajdhani', sans-serif;
		font-weight: bold;
		font-size: 48px;
		display: block;
		color: #fff;
	}
	#why-us .counters p {
		padding: 0;
		margin: 0 0 20px 0;
		font-family: 'Cairo', sans-serif;
		font-size: 14px;
		color: #cce5ff;
	}
</style>
