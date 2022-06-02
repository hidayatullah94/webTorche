<script>
	import {
		Discord,
		Facebook,
		Instagram,
		Line,
		Linkedin,
		Tiktok,
		Twitter,
		Whatsapp,
		Youtube
	} from 'svelte-bootstrap-icons';
</script>

<!-- ======= Footer ======= -->
<footer id="footer">
	<div class="footer-top">
		<div class="container">
			<div class="row">
				<div class="col-lg-6 col-md-6 footer-info">
					<h3>TORCHE</h3>
					<p>
						TORCHE Education is a education technology startup company based in Indonesia, focusing
						on chemical engineering, bioprocess engineering, and other process engineering subjects.
					</p>
				</div>
				<div class="col-lg-2 col-md-6 footer-links">
					<h4>Useful Links</h4>
					<ul>
						<li><a href="#hero">Home</a></li>
						<li><a href="#about">About us</a></li>
						<li><a href="#services">Services</a></li>
					</ul>
				</div>
				<div class="col-lg-4 col-md-6 footer-contact">
					<h4>Contact Us</h4>
					<p>
						Jl. Kelapa Lilin Utara XIV Blok DG 8 No. 27<br />
						Kab. Tangerang, Banten 15810<br />
						Indonesia <br />
						<strong>Whatsapp Business:</strong> +62 851 5521 6117<br />
						<strong>Email:</strong> admin@torche.app<br />
					</p>
					<div class="social-links">
						<a href="https://twitter.com/TorcheEdu" class="twitter"
							><i class="bi bi-twitter"><Twitter /> </i></a
						>
						<a href="https://www.facebook.com/torche.edu" class="facebook"
							><i class="bi bi-facebook"><Facebook /></i></a
						>
						<a href="https://www.instagram.com/torche.app/" class="instagram"
							><i class="bi bi-instagram"><Instagram /></i></a
						>
						<a href="https://www.youtube.com/channel/UCQnYuE3KU3CzcAjVhuCQtNw" class="youtube"
							><i class="bi bi-youtube"><Youtube /></i></a
						>
						<a href="https://www.linkedin.com/company/torche-education/" class="linkedin"
							><i class="bi bi-linkedin"><Linkedin /></i></a
						>
						<a href="https://vt.tiktok.com/ZSeu2n4ca/" class="tiktok"
							><i class="bi bi-tiktok"><Tiktok /></i></a
						>
						<a href="https://discord.com/invite/2fYBrcK785" class="discord"
							><i class="bi bi-discord"><Discord /></i></a
						>
						<a href="https://wa.me/+6285155216117" class="whatsapp"
							><i class="bi bi-whatsapp"><Whatsapp /></i></a
						>
						<a href="https://page.line.me/229wiguf" class="line"
							><i class="bi bi-line"><Line /></i></a
						>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="container">
		<div class="copyright">&copy; Copyright <strong>NewBiz</strong>. All Rights Reserved</div>
		<div class="credits">
			<!--
     All the links in the footer should remain intact.
     You can delete the links only if you purchased the pro version.
     Licensing information: https://bootstrapmade.com/license/
     Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=NewBiz
   -->
			Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
		</div>
	</div>
</footer>

<!-- End Footer -->
<style>
	/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
	#footer {
		background: #5885e9;
		padding: 0 0 30px 0;
		color: #eee;
		font-size: 14px;
	}
	#footer .footer-top {
		background: #0b122a;
		padding: 60px 0 30px 0;
	}
	#footer .footer-top .footer-info {
		margin-bottom: 30px;
	}
	#footer .footer-top .footer-info h3 {
		font-size: 34px;
		margin: 0 0 20px 0;
		padding: 2px 0 2px 0;
		line-height: 1;
		font-family: 'Cairo', sans-serif;
		color: #fff;
		font-weight: 400;
		letter-spacing: 3px;
		text-transform: uppercase;
	}
	#footer .footer-top .footer-info p {
		font-size: 13px;
		line-height: 24px;
		margin-bottom: 0;
		font-family: 'Cairo', sans-serif;
		color: #ecf5ff;
	}
	#footer .footer-top .social-links a {
		font-size: 18px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background: #5885e9;
		color: #fff;
		margin-right: 4px;
		border-radius: 50%;
		text-align: center;
		width: 36px;
		height: 36px;
		transition: 0.3s;
	}
	#footer .footer-top .social-links a i {
		line-height: 0;
	}
	#footer .footer-top .social-links a:hover {
		background: #0067d5;
		color: #fff;
	}
	#footer .footer-top h4 {
		font-size: 14px;
		font-weight: bold;
		color: #fff;
		text-transform: uppercase;
		position: relative;
		padding-bottom: 10px;
	}
	#footer .footer-top .footer-links {
		margin-bottom: 30px;
	}
	#footer .footer-top .footer-links ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	#footer .footer-top .footer-links ul li {
		padding: 8px 0;
	}
	#footer .footer-top .footer-links ul li:first-child {
		padding-top: 0;
	}
	#footer .footer-top .footer-links ul a {
		color: #ecf5ff;
	}
	#footer .footer-top .footer-links ul a:hover {
		color: #74b5fc;
	}
	#footer .footer-top .footer-contact {
		margin-bottom: 30px;
	}
	#footer .footer-top .footer-contact p {
		line-height: 26px;
	}

	#footer .copyright {
		text-align: center;
		padding-top: 30px;
	}
	#footer .credits {
		text-align: center;
		font-size: 13px;
		color: #f1f7ff;
	}
	#footer .credits a {
		color: #bfddfe;
	}
	#footer .credits a:hover {
		color: #f1f7ff;
	}
</style>
