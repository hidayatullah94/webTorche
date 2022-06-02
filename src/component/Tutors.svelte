<script>
	import { Instagram, Linkedin, Facebook, Twitter, JournalAlbum } from 'svelte-bootstrap-icons';
	export async function load() {
		const response = await fetch(`@/data/Tutors.json`); // stored in static folder
		const data = await response.json();

		return {
			data
		};
	}

	load();
</script>

<!-- <section id="tutors" class="tutors my-5">
	<div class="container">
		<div class="row my-3">
			{#each tutors as tutor, i}
				<div
					class="col-lg-4 col-md-6 d-flex align-items-stretch flex-wrap"
					data-aos="fade-up"
					data-aos-delay="100"
				>
					<div class="member">
						<img src={tutor.img} alt="img-tutor" class="img-fluid" />
						<div class="member-content">
							<h4><a href="/#/detailtutor/{i}">{tutor.name}</a></h4>
							<span>{tutor.desc}</span>
							<p>
								{tutor.experience}
							</p>
							<div class="social">
								<a href={tutor.media.ig}
									>{#if tutor.media.ig != null}<i class="bi bi-instagram"><Instagram /></i>{/if}</a
								>
								<a href={tutor.media.linked}
									>{#if tutor.media.linked != null}<i class="bi bi-linkedin"><Linkedin /></i
										>{/if}</a
								>
								<a href={tutor.media.fb}
									>{#if tutor.media.fb != null}<i class="bi bi-facebook"><Facebook /></i>{/if}</a
								>
								<a href={tutor.media.tw}
									>{#if tutor.media.tw != null}<i class="bi bi-twitter"><Twitter /></i>{/if}</a
								>
								<a href={tutor.media.research}
									>{#if tutor.media.research != null}<i class="bi bi-journal-album"
											><JournalAlbum /></i
										>{/if}</a
								>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section> -->
