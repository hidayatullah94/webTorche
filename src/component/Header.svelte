<script>
	import { ChevronDown, Globe, List } from 'svelte-bootstrap-icons';

	let current = 'nav-link home';
</script>

<!-- ======= Header ======= -->

<!-- <header id="header" class="fixed-top d-flex align-items-center">
	<div class="container d-flex justify-content-between">
		<div class="logo">
			<a href="/"><img src="../assets/img/logo.png" alt="" class="img-fluid" /></a>
		</div>

		<nav id="navbar" class="navbar">
			<ul>
				<li>
					<a
						class={current === 'nav-link scrollto home' ? 'activeted' : ''}
						on:click={() => (current = 'nav-link home')}
						aria-current="page"
						href="/">Home</a
					>
				</li>
				<li>
					<a
						class={current === 'nav-link scrollto about' ? 'activeted' : ''}
						on:click={() => (current = 'nav-link about')}
						href="/about">About</a
					>
				</li>
				<li>
					<a
						class={current === 'nav-link scrollto servicess' ? 'activeted' : ''}
						on:click={() => (current = 'nav-link servicess')}
						href="/servicess">Services</a
					>
				</li>
				<li>
					<a
						class={current === 'nav-link scrollto team' ? 'activeted' : ''}
						on:click={() => (current = 'nav-link team')}
						href="/team/team">Team</a
					>
				</li>
				<li>
					<a
						class={current === 'nav-link scrollto clientss' ? 'activeted' : ''}
						on:click={() => (current = 'nav-link clientss')}
						href="/clientss">Clients</a
					>
				</li>
				<li class="dropdown">
					<a
						class={current === 'nav-link dropdown-toggle' ? 'activeted' : ''}
						on:click={() => (current = 'nav-link dropdown-toggle')}
						href="/courses"><span>Courses</span> <i class="bi bi-chevron-down" /><ChevronDown /></a
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
						class={current === 'nav-link scrollto contact' ? 'activeted' : ''}
						on:click={() => (current = 'nav-link contact')}
						href="/contact">Contact Us</a
					>
				</li>
				<li class="dropdown">
					<a href="/"><i class="bi bi-globe"><Globe /></i></a>
					<ul>
						<li><a href="https://torche.app">English</a></li>
						<li><a href="https://torche.app/id/">Indonesia</a></li>
					</ul>
				</li>
			</ul>
			<i class="bi bi-list mobile-nav-toggle" /><List width={26} height={28} />
		</nav>
	
	</div>
</header> -->
<!-- #header -->

<header id="header" class="fixed-top d-flex align-items-center">
	<div class="container d-flex justify-content-between">
		<div class="logo">
			<a href="/"><img src="assets/img/logo.png" alt="" class="img-fluid" /></a>
		</div>
		<nav class="navbar navbar-expand-lg " id="navbar">
			<div class="container-fluid">
				<button
					class="navbar-toggler "
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon" />
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<a
								class={current === 'nav-link home' ? 'activeted' : ''}
								on:click={() => (current = 'nav-link home')}
								aria-current="page"
								href="/">Home</a
							>
						</li>
						<li class="nav-item">
							<a
								class={current === 'nav-link about' ? 'activeted' : ''}
								on:click={() => (current = 'nav-link about')}
								href="/about">About</a
							>
						</li>
						<li class="nav-item">
							<a
								class={current === 'nav-link servicess' ? 'activeted' : ''}
								on:click={() => (current = 'nav-link servicess')}
								href="/servicess">Services</a
							>
						</li>
						<li class="nav-item">
							<a
								class={current === 'nav-link team' ? 'activeted' : ''}
								on:click={() => (current = 'nav-link team')}
								href="/team/team">Team</a
							>
						</li>
						<li class="nav-item">
							<a
								class={current === 'nav-link clientss' ? 'activeted' : ''}
								on:click={() => (current = 'nav-link clientss')}
								href="/clientss">Clients</a
							>
						</li>
						<li class="nav-item dropdown">
							<a
								class={current === 'nav-link dropdown-toggle' ? 'activeted' : ''}
								on:click={() => (current = 'nav-link dropdown-toggle')}
								href="/"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
								><span>Courses</span><i class="bi bi-chevron-down"><ChevronDown /></i>
							</a>
							<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
								<li><a class="dropdown-item" href="/courses/course">Our Courses</a></li>
								<li><a class="dropdown-item" href="/courses/tutor">Our Tutors</a></li>
								<li><a class="dropdown-item" href="/courses/register">Register for Classes</a></li>
								<li><a class="dropdown-item" href="/courses/price">Pricing</a></li>
							</ul>
						</li>
						<li class="nav-item">
							<a
								class={current === 'nav-link contact' ? 'activeted' : ''}
								on:click={() => (current = 'nav-link contact')}
								href="/contact">Contact Us</a
							>
						</li>
						<li class="nav-item dropdown">
							<a
								class="nav-link dropdown-toggle"
								href="/"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<Globe />
							</a>
							<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
								<li><a class="dropdown-item" href="https://torche.app">English</a></li>
								<li><a class="dropdown-item" href="https://torche.app/id/">Indonesia</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</header>

<style>
	#header {
		margin-bottom: 25px;
		background: #0b122a;
		color: white;
	}
	a {
		color: white;
	}
	.activeted {
		color: #0b6bd3;
		font-weight: bold;
	}
	.dropdown-menu li a:hover {
		color: #0b6bd3;
		outline: none;
		text-decoration: none;
		background-color: transparent;
	}
</style>
