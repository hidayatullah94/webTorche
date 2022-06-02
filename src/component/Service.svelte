<script>
	import {
		Binoculars,
		CardHeading,
		Easel,
		Easel2,
		Mortarboard,
		People,
		PersonVideo3
	} from 'svelte-bootstrap-icons';
</script>

<!-- ======= Services Section ======= -->
<section id="services" class="section-bg">
	<div class="container" data-aos="fade-up">
		<header class="section-header">
			<h3>Services</h3>
			<p>
				As a complementary education company, we provide services to support your goals to become a
				high-quality process engineer.
			</p>
		</header>

		<div class="row justify-content-center">
			<div class="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="100">
				<div class="box">
					<div class="icon">
						<i class="bi bi-easel2" style="color: #ff6442"><Easel2 width={48} height={48} /></i>
					</div>
					<h4 class="title"><a href="/#">Tutor Class</a></h4>
					<p class="description">
						Tutor class consists of materials explanation from our tutors with problem solving
						examples.
					</p>
				</div>
			</div>
			<div class="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="200">
				<div class="box">
					<div class="icon">
						<i class="bi bi-people" style="color: #ffae5f"><People width={48} height={48} /></i>
					</div>
					<h4 class="title"><a href="/#">Consultation Class</a></h4>
					<p class="description">
						Students can asks about the materials, homeworks, assignments, and projects related to
						the topics choosen.
					</p>
				</div>
			</div>

			<div class="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="100">
				<div class="box">
					<div class="icon">
						<i class="bi bi-binoculars" style="color: #51c1cb"
							><Binoculars width={48} height={48} /></i
						>
					</div>
					<h4 class="title"><a href="/#">Focus Tutor Class</a></h4>
					<p class="description">
						Focus tutor class is intended for students who wanted to take part in competitions and
						projects that needs special coaching.
					</p>
				</div>
			</div>
			<div class="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="200">
				<div class="box">
					<div class="icon">
						<i class="bi bi-person-video3" style="color: #41cf2e"
							><PersonVideo3 width={48} height={48} /></i
						>
					</div>
					<h4 class="title"><a href="/#">Seminars and Webinars</a></h4>
					<p class="description">
						We provide seminars and/or webinars in process engineering topics with trained and
						experienced practitioners
					</p>
				</div>
			</div>

			<div class="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="100">
				<div class="box">
					<div class="icon">
						<i class="bi bi-card-heading" style="color: #5885e9"
							><CardHeading width={48} height={48} /></i
						>
					</div>
					<h4 class="title"><a href="/#">Training</a></h4>
					<p class="description">
						Trainings and certifications that can give added value and support students' careers in
						process engineering.
					</p>
				</div>
			</div>
			<div class="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="200">
				<div class="box">
					<div class="icon">
						<i class="bi bi-mortarboard" style="color: #0b122a"
							><Mortarboard width={48} height={48} /></i
						>
					</div>
					<h4 class="title"><a href="/#">Bootcamp</a></h4>
					<p class="description">
						Bootcamps are intended for students who want to accelerate their knowledge and careers
						in process engineering.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- End Services Section -->
<style>
	/* Services Section
      --------------------------------*/

	#services {
		padding: 60px 0 40px 0;
		box-shadow: inset 0px 0px 12px 0px rgba(0, 0, 0, 0.1);
	}
	#services .section-header {
		padding-top: 25px;
	}

	#services .box {
		padding: 30px;
		position: relative;
		overflow: hidden;
		border-radius: 10px;
		margin: 0 10px 40px 10px;
		background: #fff;
		box-shadow: 0 10px 29px 0 rgba(68, 88, 144, 0.1);
		transition: all 0.3s ease-in-out;
	}
	#services .box:hover {
		transform: translateY(-5px);
	}
	#services .icon {
		position: absolute;
		left: 15px;
		top: calc(50% - 32px);
	}
	#services .icon i {
		font-size: 64px;
		line-height: 0;
		transition: 0.5s;
	}
	#services .title {
		margin-left: 70px;
		font-weight: 700;
		margin-bottom: 15px;
		font-size: 18px;
	}
	#services .title a {
		color: #111;
	}
	#services .box:hover .title a {
		color: #007bff;
	}
	#services .description {
		font-size: 14px;
		margin-left: 70px;
		line-height: 24px;
		margin-bottom: 0;
	}
</style>
