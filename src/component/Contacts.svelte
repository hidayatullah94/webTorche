<script>
	import { Envelope, Instagram, Line, Linkedin, Twitter, Whatsapp } from 'svelte-bootstrap-icons';
</script>

<!-- ======= Contact Section ======= -->
<section id="contact">
	<div class="container-fluid" data-aos="fade-up">
		<div class="section-header">
			<h3>Contact Us</h3>
		</div>

		<div class="row">
			<div class="col-lg-12">
				<div class="row">
					<div class="col-md-2 info">
						<i class="bi bi-envelope"><Envelope width={28} height={28} /></i>
						<p>admin@torche.app</p>
					</div>
					<div class="col-md-2 info">
						<i class="bi bi-whatsapp"><Whatsapp width={28} height={28} /></i>
						<p>+62 851 5521 6117</p>
					</div>
					<div class="col-md-2 info">
						<i class="bi bi-line"><Line width={28} height={28} /></i>
						<p>@229wiguf</p>
					</div>
					<div class="col-md-2 info">
						<i class="bi bi-twitter"><Twitter width={28} height={28} /></i>
						<p>@TorcheEdu</p>
					</div>
					<div class="col-md-2 info">
						<i class="bi bi-instagram"><Instagram width={28} height={28} /></i>
						<p>@torche.app</p>
					</div>
					<div class="col-md-2 info">
						<i class="bi bi-linkedin"><Linkedin width={28} height={28} /></i>
						<p>TORCHE Education</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- End Contact Section -->
<style>
	#contact .section-header {
		padding-top: 25px;
	}
</style>
