<script context="module">
	// @ts-ignore
	export const load = async ({ fetch }) => {
		const res = await fetch(`/api/tutors/all`);
		const tutors = await res.json(); // returned as array

		return {
			props: {
				tutors
			}
		};
	};
</script>

<script>
	import BreadCrum from '@/component/BreadCrum.svelte';
	import Footer from '@/component/Footer.svelte';
	import { Instagram, Linkedin, Facebook, Twitter, JournalAlbum } from 'svelte-bootstrap-icons';

	/**
	 * @type {any}
	 */
	export let tutors;
</script>

<BreadCrum name={`TORCHE's Tutors`} link={'/'} linkOne={'Course'} linkTwo={'Tutors'} />

<section id="tutors" class="tutors my-5">
	<div class="container">
		<div class="row my-3">
			{#each tutors as tutor}
				<div
					class="col-lg-4 col-md-6 d-flex align-items-stretch flex-wrap"
					data-aos="fade-up"
					data-aos-delay="100"
				>
					<div class="member">
						<img src={tutor.img} alt="img-tutor" class="img-fluid" />
						<div class="member-content">
							<h4>
								<a sveltekit:prefetch href={`/courses/tutor/${tutor.id}`}>{tutor.name}</a>
							</h4>
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
</section>

<Footer />
