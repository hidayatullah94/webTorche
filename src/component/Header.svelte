<script>
	import { ChevronDown, Globe } from 'svelte-bootstrap-icons';

	let current = 'nav-link home';

	// Show mobile icon and display menu
	let showMobileMenu = false;

	// Mobile menu click event handler
	const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);
</script>

<div id="header" class="fixed-top d-flex align-items-center">
	<div class="container d-flex justify-content-between">
		<div class="logo">
			<a href="/"><img src="/assets/img/logo.png" alt="" class="img-fluid" /></a>
		</div>
	</div>
	<nav id="navbar" class="navbar">
		<ul class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
			<li>
				<a
					class={current === 'nav-link home' ? 'activeted' : ''}
					on:click={() => (current = 'nav-link home')}
					aria-current="page"
					href="/">Home</a
				>
			</li>
			<li>
				<a
					class={current === 'nav-link about' ? 'activeted' : ''}
					on:click={() => (current = 'nav-link about')}
					href="/about">About</a
				>
			</li>
			<li>
				<a
					class={current === 'nav-link servicess' ? 'activeted' : ''}
					on:click={() => (current = 'nav-link servicess')}
					href="/servicess">Services</a
				>
			</li>
			<li>
				<a
					class={current === 'nav-link team' ? 'activeted' : ''}
					on:click={() => (current = 'nav-link team')}
					href="/team/team">Team</a
				>
			</li>
			<li>
				<a
					class={current === 'nav-link clientss' ? 'activeted' : ''}
					on:click={() => (current = 'nav-link clientss')}
					href="/clientss">Clients</a
				>
			</li>
			<li class="dropdown">
				<a
					class={current === 'nav-link dropdown-toggle' ? 'activeted' : ''}
					on:click={() => (current = 'nav-link dropdown-toggle')}
					href="/"><span>Courses</span> <i class="bi bi-chevron-down" /><ChevronDown /></a
				>
				<ul>
					<li><a href="/courses/course">Our Courses</a></li>
					<li><a href="/courses/tutor">Our Tutors</a></li>
					<li><a href="/courses/register">Register for Classes</a></li>
					<li><a href="/courses/price">Pricing</a></li>
				</ul>
			</li>
			<li>
				<a
					class={current === 'nav-link contact' ? 'activeted' : ''}
					on:click={() => (current = 'nav-link contact')}
					href="/contact"><span class="me-1">Contact</span><span>Us</span></a
				>
			</li>
			<li class="dropdown">
				<a href="/"><i class="bi bi-globe" /><Globe /></a>
				<ul>
					<li><a href="https://torche.app">English</a></li>
					<li><a href="https://torche.app/id/">Indonesia</a></li>
				</ul>
			</li>
		</ul>
		<div on:click={handleMobileIconClick} class={`mobile-icon${showMobileMenu ? ' active' : ''}`}>
			<div class="middle-line" />
		</div>
	</nav>
</div>

<style>
	a {
		color: #fff;
	}
	nav {
		height: 55px;
	}
	.navbar ul li a:hover {
		color: #007bff;
	}

	.mobile-icon {
		width: 25px;
		height: 14px;
		position: relative;
		cursor: pointer;
	}

	.mobile-icon:after,
	.mobile-icon:before,
	.middle-line {
		content: '';
		position: absolute;
		width: 100%;
		height: 2px;
		background-color: #fff;
		transition: all 0.4s;
		transform-origin: center;
	}

	.mobile-icon:before,
	.middle-line {
		top: 0;
	}

	.mobile-icon:after,
	.middle-line {
		bottom: 0;
	}

	.mobile-icon:before {
		width: 66%;
	}

	.mobile-icon:after {
		width: 33%;
	}

	.middle-line {
		margin: auto;
	}

	.mobile-icon:hover:before,
	.mobile-icon:hover:after,
	.mobile-icon.active:before,
	.mobile-icon.active:after,
	.mobile-icon.active .middle-line {
		width: 100%;
	}

	.mobile-icon.active:before,
	.mobile-icon.active:after {
		top: 50%;
		transform: rotate(-45deg);
	}

	.mobile-icon.active .middle-line {
		transform: rotate(45deg);
	}

	.navbar-list {
		display: none;
		width: 100%;
		justify-content: space-between;
		margin: 0;
		padding: 0 40px;
	}

	.navbar-list.mobile {
		background: #0b122a;
		position: fixed;
		display: block;
		height: calc(100% - 45px);
		left: 0;
		top: 80px;
	}

	.navbar-list li {
		list-style-type: none;
		position: relative;
		padding: 0 7px;
	}

	.navbar-list li:before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1px;
		background: #0b122a;
	}

	.navbar-list a {
		text-decoration: none;
		display: flex;
		height: 45px;
		align-items: center;
		padding: 0 10px;
		font-size: 14px;
	}

	@media only screen and (min-width: 767px) {
		.mobile-icon {
			display: none;
		}

		.navbar-list {
			display: flex;
			padding: 0;
		}

		.navbar-list a {
			display: inline-flex;
		}
	}
	#header {
		height: 80px;
		z-index: 997;
		transition: all 0.5s;
		background: #0b122a;
		box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.2);
		padding: 0 25px;
	}

	#header .logo h1 a,
	#header .logo h1 a:hover {
		color: #00366f;
		text-decoration: none;
	}
	#header .logo img {
		padding: 0;
		max-height: 30px;
	}
	#header .logo img:hover {
		opacity: 0.8;
	}

	.navbar .dropdown ul {
		display: block;
		position: absolute;
		left: 14px;
		top: calc(100% + 30px);
		margin: 0;
		padding: 10px 0;
		z-index: 99;
		opacity: 0;
		visibility: hidden;
		background: #0b122a;
		transition: 0.3s;
	}
	.navbar .dropdown ul a:hover,
	.navbar .dropdown ul .active:hover,
	.navbar .dropdown ul li:hover > a {
		color: #007bff;
	}
	.navbar .dropdown:hover > ul {
		opacity: 1;
		top: 100%;
		visibility: visible;
	}
	.navbar .dropdown .dropdown ul {
		top: 0;
		left: calc(100% - 30px);
		visibility: hidden;
	}
	.navbar .dropdown .dropdown:hover > ul {
		opacity: 1;
		top: 0;
		left: 100%;
		visibility: visible;
	}
	.navbar .dropdown ul li {
		min-width: 200px;
	}
	.navbar .dropdown ul a {
		padding: 10px 20px;
		font-size: 14px;
		text-transform: none;
	}
	.navbar .dropdown ul a i {
		font-size: 12px;
	}
	.navbar-list.mobile .dropdown:hover > ul {
		margin-left: 60px;
		top: 0;
	}
	.activeted {
		color: #007bff;
		font-weight: bold;
	}
</style>
