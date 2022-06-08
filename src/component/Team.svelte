<script>
	import DetailTeam from './DetailTeam.svelte';
</script>

<section id="team">
	<div class="container-fluid my-5">
		<div class="container">
			<div class="row">
				<div class="col-12 text-center" data-aos="fade-down">
					<DetailTeam
						photo={'../assets/img/team-1.jpg'}
						title={'Chief Executive Officer, Chief Marketing Officer & CO-Founder'}
						name={'Muhammad Yusuf Arya Ramadhan'}
					/>
				</div>
			</div>
			<div class="row my-3">
				<div class="col-md-6 col-lg-3 text-center" data-aos="fade-down-right">
					<DetailTeam
						photo={'../assets/img/team-2.jpg'}
						title={'Chief Operating Officer & CO-Founder'}
						name={'Felix Pratama'}
					/>
				</div>
				<div class="col-md-6 col-lg-3 text-center " data-aos="fade-down-right">
					<DetailTeam
						photo={'../assets/img/team-3.jpg'}
						title={'Chief Financial Officer & CO-Founder'}
						name={'Leon Lukhas Santoso'}
					/>
				</div>
				<div class="col-md-6 col-lg-3 text-center " data-aos="fade-down-left">
					<DetailTeam
						photo={'../assets/img/team-4.jpg'}
						title={'Chief Human Resource Officer & CO-Founder'}
						name={'Sendy Winata'}
					/>
				</div>
				<div class="col-md-6 col-lg-3 text-center " data-aos="fade-down-left">
					<DetailTeam
						photo={'../assets/img/team/cto.jpg'}
						title={'Chief Technology Officer'}
						name={'Samuel Pangeran Aletheia'}
					/>
				</div>
			</div>

			<div class="row my-3">
				<div class="col-md-6 col-lg-3 text-center" data-aos="fade-right">
					<DetailTeam
						photo={'../assets/img/team/curr.jpg'}
						title={'Manager of Curriculum'}
						name={'Syahdan Amir Muhammad'}
					/>
				</div>
				<div class="col-md-6 col-lg-3 text-center" data-aos="fade-right">
					<DetailTeam
						photo={'../assets/img/team/contr.jpg'}
						title={`Manager of Controller and Sales`}
						name={'Athallia Qatrunnada'}
					/>
				</div>
				<div class="col-md-6 col-lg-3 text-center" data-aos="fade-left">
					<DetailTeam
						photo={'../assets/img/team/audit.jpg'}
						title={`Manager of Financial Audit`}
						name={'Sharen Kevin'}
					/>
				</div>
				<div class="col-md-6 col-lg-3 text-center" data-aos="fade-left" />
			</div>

			<div class="row mt-3">
				<div class="col-md-6  col-lg-12" data-aos="fade-up">
					<h4 class="fw-bold">Board of Commissioners</h4>
				</div>
			</div>
			<div class="row my-3">
				<div
					class="col-md-6 col-lg-3 text-center offset-lg-3"
					data-aos="fade-up"
					data-aos-delay="200"
				>
					<DetailTeam
						photo={'../assets/img/team/comm1.jpg'}
						title={`Commisioner`}
						name={'Ir. Pahala P Silalahi'}
					/>
				</div>
				<div class="col-md-6 col-lg-3 text-center" data-aos="fade-up" data-aos-delay="200">
					<DetailTeam
						photo={'../assets/img/team/comm2.jpg'}
						title={`Commisioner`}
						name={'Pariama Carolin S, S.H.'}
					/>
				</div>
			</div>
		</div>
	</div>
</section>
