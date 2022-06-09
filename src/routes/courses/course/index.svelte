<script context="module">
	import BreadCrum from '@/component/BreadCrum.svelte';
	import { StarFill } from 'svelte-bootstrap-icons';

	// @ts-ignore
	export const load = async ({ fetch }) => {
		const res = await fetch(`/api/course`);
		const course = await res.json(); // returned as array

		return {
			props: {
				course
			}
		};
	};
</script>

<script>
	export /**
	 * @type {any}
	 */
	let course;
</script>

<BreadCrum name={'Courses'} link={'/'} linkOne={'Courses'} linkTwo={'Our Courses'} />

<section id="courses" class="courses">
	<div class="container" data-aos="fade-up">
		<div class="row">
			{#each course as corse}
				<div
					class="col-lg-4 col-md-6 d-flex align-items-stretch"
					data-aos="zoom-in"
					data-aos-delay="100"
				>
					<div class="course-item">
						<img src={corse.img} class="img-fluid" alt="img-course" />
						<div class="course-content">
							<div class="d-flex justify-content-between align-items-center mb-3">
								<h4>{corse.subTitle}</h4>
								<p class="rating"><i class="bi bi-star-fill"><StarFill /></i> {corse.rating}</p>
							</div>
							<h3><!-- a href="course-details.html"-->{corse.title}</h3>
							<p class="course-description">{corse.desc}</p>
							<div class="trainer d-flex justify-content-between align-items-center">
								<div class="trainer-profile d-flex align-items-center">
									{#each corse.tutor as tutor}
										<img src={tutor.photo} class="img1 img-fluid" alt="" />
									{/each}

									<span class="">
										{#each corse.tutor as tutor}
											{#if tutor.name != ''}
												<a href="/courses/tutor/{tutor.id}">{tutor.name}</a> ,
											{/if}
										{/each}

										<!-- {#if corse.tutor.tutor3.name != ''}
											, <a href="/detailcoursetutor3/">{corse.tutor.tutor3.name}</a>
										{/if} -->
									</span>
								</div>
								<!-- div class="trainer-rank d-flex align-items-center">
							<i class="bi bi-person-circle"></i>&nbsp;50
							&nbsp;&nbsp;
							<i class="bi bi-heart"></i>&nbsp;65
						  </div-->
							</div>
						</div>
					</div>
				</div>
				<!-- End Course Item-->
			{/each}
			<div class="row">
				<div class="button">
					<a
						href="https://bit.ly/3KFAKd0"
						class="btn-outline-primary rounded-pill px-5 py-1 border-bottom border-top border-end border-start border-primary"
					>
						See our Full Curriclum Guide
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
