<!-- End Testimonials Section -->
<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Autoplay, Pagination } from 'swiper';

	import 'swiper/css';
	import 'swiper/css/pagination';
	import 'swiper/css/autoplay';
</script>

<!-- ======= Testimonials Section ======= -->
<section id="testimonials" class="section-bg">
	<div class="container" data-aso="zoom-in">
		<header class="section-header">
			<h3>What they said about TORCHE</h3>
		</header>

		<div class="row justify-content-center">
			<div class="col-lg-10">
				<div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
					<div class="swiper-wrapper">
						<Swiper
							modules={[Autoplay, Pagination]}
							spaceBetween={50}
							slidesPerView={1}
							pagination={{ clickable: true }}
							autoplay
						>
							<SwiperSlide>
								<div class="swiper-slide">
									<div class="testimonial-item">
										<!-- img src="assets/img/testimonial-1.jpg" class="testimonial-img" alt=""-->
										<h3>Kania Putri</h3>
										<h4>Undergraduate Chemical Engineering Student at Universitas Indonesia</h4>
										<p>
											The explanation from the tutor is complete and easy to understand, the
											material is discussed thoroughly.
										</p>
									</div>
								</div>
							</SwiperSlide>
							<!-- End testimonial item -->
							<SwiperSlide>
								<div class="swiper-slide">
									<div class="testimonial-item">
										<!-- img src="assets/img/testimonial-2.jpg" class="testimonial-img" alt=""-->
										<h3>Daniel Harun</h3>
										<h4>
											Undergraduate Chemical Engineering Student at Universitas Sumatera Utara
										</h4>
										<p>
											The tutor make the class interactive, so it wasn't monotonous and easy to
											understand some of the hard concepts.
										</p>
									</div>
								</div>
							</SwiperSlide>
							<!-- End testimonial item -->
							<SwiperSlide>
								<div class="swiper-slide">
									<div class="testimonial-item">
										<!-- img src="assets/img/testimonial-3.jpg" class="testimonial-img" alt=""-->
										<h3>Dhanira</h3>
										<h4>Undergraduate Chemical Engineering Student Universitas Indonesia</h4>
										<p>
											Very happy with tutors who are interactive and trigger us to think, so we
											don't only listen to from the tutor but we are also given the opportunity to
											try to think from the hints given by the tutor.
										</p>
									</div>
								</div>
							</SwiperSlide>
							<!-- End testimonial item -->
							<SwiperSlide>
								<div class="swiper-slide">
									<div class="testimonial-item">
										<!-- img src="assets/img/testimonial-4.jpg" class="testimonial-img" alt=""-->
										<h3>Zakaria</h3>
										<h4>Postgraduate Chemical Engineering Student at Institut Teknologi Bandung</h4>
										<p>Software tutorials from the tutor is very clear and easy to follow.</p>
									</div>
								</div>
							</SwiperSlide>
							<!-- End testimonial item -->
							<SwiperSlide>
								<div class="swiper-slide">
									<div class="testimonial-item">
										<!-- img src="assets/img/testimonial-5.jpg" class="testimonial-img" alt=""-->
										<h3>Farah Marda</h3>
										<h4>Postgraduate Chemical Engineering Student at Universitas Diponegoro</h4>
										<p>
											Two-way communciations with the tutor in the class makes learning more fun and
											interactive.
										</p>
									</div>
								</div>
							</SwiperSlide>
							<!-- End testimonial item -->
						</Swiper>
					</div>
					<div class="swiper-pagination" />
				</div>
			</div>
		</div>
	</div>
</section>
