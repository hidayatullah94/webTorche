<script>
	import { CardChecklist, CheckLg, Wifi } from 'svelte-bootstrap-icons';
</script>

<!-- ======= About Section ======= -->
<section id="about">
	<div class="container" data-aos="fade-up">
		<header class="section-header">
			<h3>About Us</h3>
			<p>
				TORCHE Education is an Education Technology Start-Up that set the goals to create a
				decentralized higher education platform on a global scale. In 2019, the four co-founders met
				and discussed the platform we wanted to develop. Torche launched our e-tutoring classes,
				which cover four subjects of a process engineering study for Universitas Indonesia's
				students, on 21st September 2020.
			</p>
		</header>

		<div class="row about-container">
			<div class="col-lg-6 content order-lg-1 order-2">
				<p>
					Today, TORCHE has more than 30 subjects available, with 800 unique students spread around
					more than 8 universities. We are committed to providing an accelerated, comprehensive, and
					internationally standardized higher education to all chemical engineering, bioprocess
					engineering, and, in the future, all higher education students across the globe.
				</p>

				<div class="icon-box" data-aos="fade-up" data-aos-delay="100">
					<div class="icon">
						<i class="bi bi-card-checklist"><CardChecklist width={24} height={24} /></i>
					</div>
					<h4 class="title"><a href="/#">Internationally Standardized Curriculum</a></h4>
					<p class="description">
						TORCHE provides the best process engineering curriculum from top 5 universities in
						Indonesia combined with top 5 universities in the world.
					</p>
				</div>

				<div class="icon-box" data-aos="fade-up" data-aos-delay="200">
					<div class="icon"><i class="bi bi-wifi"><Wifi width={24} height={24} /></i></div>
					<h4 class="title"><a href="/#">Full Online</a></h4>
					<p class="description">
						We held classes on-demand with premium meeting platforms (Google Meet and Zoom Meetings)
						and handout materials integrated to your Google Workspace account.
					</p>
				</div>

				<div class="icon-box" data-aos="fade-up" data-aos-delay="300">
					<div class="icon"><i class="bi bi-check-lg"><CheckLg width={24} height={24} /></i></div>
					<h4 class="title"><a href="/#">Trusted</a></h4>
					<p class="description">
						Our tutors are qualified and trained to deliver the materials that suits the needs of
						our students from all around Indonesia.
					</p>
				</div>
			</div>

			<div class="col-lg-6 background order-lg-2" data-aos="zoom-in">
				<img src="./assets/img/about-img.svg" class="img-fluid" alt="" />
			</div>
		</div>

		<div class="row about-extra">
			<div class="col-lg-6" data-aos="fade-right">
				<img src="./assets/img/quality-tutor.webp" class="img-fluid" alt="" />
			</div>
			<div class="col-lg-6 pt-5 pt-lg-0" data-aos="fade-left">
				<h4>Tutors Background</h4>
				<p>
					TORCHE has tutors who are experts in their field and have experience working in national
					and multinational companies, both in Indonesia and abroad.
				</p>
				<p>These are some of our tutors' experiences and mastery.</p>
			</div>
		</div>

		<!-- <div class="row about-extra">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
            <img src="assets/img/about-extra-2.svg" class="img-fluid" alt="">
          </div>
    
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-right">
            <h4>Neque saepe temporibus repellat ea ipsum et. Id vel et quia tempora facere reprehenderit.</h4>
            <p>
              Delectus alias ut incidunt delectus nam placeat in consequatur. Sed cupiditate quia ea quis. Voluptas nemo qui aut distinctio. Cumque fugit earum est quam officiis numquam. Ducimus corporis autem at blanditiis beatae incidunt sunt.
            </p>
            <p>
              Voluptas saepe natus quidem blanditiis. Non sunt impedit voluptas mollitia beatae. Qui esse molestias. Laudantium libero nisi vitae debitis. Dolorem cupiditate est perferendis iusto.
            </p>
            <p>
              Eum quia in. Magni quas ipsum a. Quis ex voluptatem inventore sint quia modi. Numquam est aut fuga mollitia exercitationem nam accusantium provident quia.
            </p>
          </div>
    
        </div> -->
	</div>
</section>

<!-- End About Section -->
<style>
	#about {
		background: #fff;
		padding: 60px 0;
	}
	#about .section-header {
		padding-top: 25px;
	}
	#about .about-container .background {
		margin: 20px 0;
	}
	#about .about-container .content {
		background: #fff;
	}
	#about .about-container .title {
		color: #333;
		font-weight: 700;
		font-size: 32px;
	}
	#about .about-container p {
		line-height: 26px;
	}
	#about .about-container p:last-child {
		margin-bottom: 0;
	}
	#about .about-container .icon-box {
		background: #fff;
		background-size: cover;
		padding: 0 0 30px 0;
	}
	#about .about-container .icon-box .icon {
		float: left;
		background: #fff;
		width: 64px;
		height: 64px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		border: 2px solid #007bff;
		transition: all 0.3s ease-in-out;
	}
	#about .about-container .icon-box .icon i {
		color: #007bff;
		font-size: 24px;
		line-height: 0;
	}
	#about .about-container .icon-box:hover .icon {
		background: #007bff;
	}
	#about .about-container .icon-box:hover .icon i {
		color: #fff;
	}
	#about .about-container .icon-box .title {
		margin-left: 80px;
		font-weight: 600;
		margin-bottom: 5px;
		font-size: 18px;
	}
	#about .about-container .icon-box .title a {
		color: #283d50;
	}
	#about .about-container .icon-box .description {
		margin-left: 80px;
		line-height: 24px;
		font-size: 14px;
	}
	#about .about-extra {
		padding-top: 60px;
	}
	#about .about-extra h4 {
		font-weight: 600;
		font-size: 24px;
	}
</style>
