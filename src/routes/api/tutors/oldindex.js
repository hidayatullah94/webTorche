export async function get() {
	return {
		body: [
			...tutors
		]

	};
}

export const tutors = [
	{
		//isdone
		id: 1,
		img: '/assets/img/trainers/tutors-1.jpg',
		name: 'Felix Pratama',
		desc: `Process Plant Design, Product Design and Development, Transport Phenomena, Fluid and Particle Mechanics`,
		experience: `Felix has 4 years-experience in handling supply chain management at consumer goods company in Indonesia. He teaches chemical engineering subjects since 2016 as a lecturer assistant at Universitas Indonesia.`,
		media: {
			fb: null,
			tw: null,
			ig: 'https://www.instagram.com/lixpratama/',
			linked: 'https://www.linkedin.com/in/felix-pratama-257295112/',
			research: null
		},
		about: `Felix is currently Head of Section - Logistic Solution at Wings Group Indonesia (PT. Sayap Mas Utama). He is graduated from Universitas Indonesia with 3,91 GPA. While he was a student at Universitas
      Indonesia, he became lecturer assistant in transport phenomena and plant design course. At TORCHE Education, he tutors some subjects including transport phenomena, fluid mechanics, product design, and plant design.`,
		review: '277',
		rating: '4,9 / 5,0',
		schedule: `<iframe style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=134206045/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`
	},
	//isdone
	{
		id: 2,
		img: '/assets/img/trainers/tutors-2.jpg',
		name: 'Leon Lukhas Santoso',
		desc: `Chemical Reaction Engineering`,
		experience: `Leon teaches chemical engineering subjects since 2018 as lecturer assistant at Universitas Indonesia. He obtained his Master Degree in Chemical Engineering Science at National Taiwan University of Science and Technology, Taipei.`,
		media: {
			fb: `https://www.facebook.com/leon.santoso/`,
			tw: `https://twitter.com/Leonsantoso`,
			ig: null,
			linked: 'https://www.linkedin.com/in/leon-santoso/',
			research: null
		},
		about: `Leon currently pursuing Master of Science in Chemical Engineering at National Taiwan University of Science and Technology, Taipei. At TORCHE Education, he is a co-founder and tutor in chemical reaction engineering course. Leon graduated from Unviersitas Indonesia, and he was a lecturer assistant in numerous subjects, including product design and plant design course.`,
		review: '97',
		rating: '4,79 / 5,0',
		schedule: `<iframe style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=903016931/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`
	},
	{
		//isdone
		id: 3,
		img: '/assets/img/trainers/tutors-3.jpg',
		name: 'Muhammad Yusuf Arya Ramadhan',
		desc: `Bioprocess Engineering, Engineering Economy`,
		experience: `Arya is a researcher in bioprocess topics since 2016 at Universitas Indonesia. He experienced handling manufacturing in fatty acid at Unilever Oleochemical Indonesia.`,
		media: {
			tw: `https://twitter.com/arya1302`,
			fb: null,
			ig: 'https://www.instagram.com/ary.ramadhan/',
			linked: 'https://www.linkedin.com/in/arya-ramadhan/',
			research: `https://www.researchgate.net/profile/Muhammad-Ramadhan-27`
		},
		rating: '4,8 / 5,0',
		review: '22',
		about: `Arya graduated from Universitas Indonesia, with bachelor degree in bioprocess Engineering and master degree in chemical engineering. Currently, he is the Chief Executive Officer at TORCHE Education and tutors in engineering economy, product design, and plant design course. Arya experienced in faty acid manufacturing when he was an intern at Unilever Oleochemical Indonesia. He became research assistant at Universitas Indonesia at 2016 and lecturer assistant in numerous courses at Universitas Indonesia. `,
		schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=1509109124/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`
	},
	{
		//isdone
		id: 4,
		img: '/assets/img/trainers/tutors-4.jpg',
		name: 'Sendy Winata',
		desc: `Fundamentals of Mass Transfer, Process Control and Dynamics`,
		experience: `Sendy experienced in process control in oil and gas industry and handling supply chain management at fast moving customer goods company in Indonesia`,
		media: {
			fb: null,
			tw: null,
			ig: 'https://www.instagram.com/sendywee/?hl=en/',
			linked: 'https://id.linkedin.com/in/sendy-winata-941265168',
			research: null
		},
		rating: '4,66 / 5,0',
		review: '203',
		about: `Sendy is a tutor and co-founder at TORCHE Education. He is a PDCA Officer at PT Sayap Mas Utama (Wings Group), managing supply chain in one of the biggest Fast Moving Consumer Goods company in Indonesia. Previously, he is an engineer at ExxonMobil, handling process control in oil and gas indsutry. He teaches process control and mass transfer subjects at TORCHE Education. `,
		schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=129721676/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`
	},
	//isdone
	{
		id: 5,
		img: '/assets/img/trainers/tutors-5.jpg',
		name: 'Syailendra Supit',
		desc: `Chemical Engineering Mathematics, Fundamentals of Calculus, Fluid Particle Mechanics, Numerical Computation for Engineers`,
		experience: `Syailendra is a tutor at TORCHE Education and currently pursuing master degree at Institut Teknologi Bandung`,
		media: {
			fb: null,
			tw: null,
			ig: null,
			linked: null,
			research: null
		},
		rating: '4,62 / 5,0',
		review: '44',
		about: `Syailendra currently pursuing master degree in chemical engineering at Institut Teknologi Bandung. He obtained his bachelor degree in chemical engineering from Universitas Indonesia and become research assistant there. Previously, he became lecturer assistant in some chemical engineering subjects at Universitas Indonesia, namely numerical computation, chemical engineering modelling, bioreactor engineering, and bioprocess equipment design course.`,
		schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=853803407/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`
	},
	{
		//isdone
		id: 6,
		img: '/assets/img/trainers/tutors-6.jpg',
		name: 'Samuel Pangeran Aletheia',
		desc: `Chemical Engineering Mathematics, Chemical Engineering Thermodynamics, Process Equipment Design`,
		experience: `Graduated from Chemical Engineering major at Universitas Indonesia (Bachelor Degree) and Institut Teknologi Bandung (Master Degree), Samuel handles many projects in oil and gas industries.`,
		media: {
			fb: `https://ms-my.facebook.com/samuel.p.silalahi`,
			tw: `https://twitter.com/sam_pangeran`,
			ig: `https://www.instagram.com/sam_pangeran`,
			linked: 'https://id.linkedin.com/in/samuel-pangeran-aletheia-ba616a118',
			research: null
		},
		rating: '4,6 / 5,0',
		review: '156',
		about: `Samuel is a process engineer and educator graduated from Universitas Indonesia (2019) and Institut Teknologi Bandung (2022) majoring in chemical engineering. As a process engineer, Samuel has handled many projects in oil and gas indsutries and petrochemical industries across Indonesia. Some of them are PT. Pertamina's (Persero) CB-III Pipeline project, BBWM Refrigeration FEED, PT Bukit Asam TBBC at South Sumatera,
      PT Petromine's Biodiesel storage, PT. Medco Energy's Water-Oil separator improvement, etc.<br><br> As an educator, Samuel teaches more than 200 students in chemical engineering and become lecturer assistant since he was studying at Universitas Indonesia. He teaches
      numerous subjects in chemical engineering and specialized in Computer-Aided Chemical Engineering. Samuel skilled in most process engineering softwares, such as Unisim Design, Aspen HYSYS, Aspen Plus, COMSOL Multiphysics, ANSYS, and Schlumberger PIPESIM and Symmetry.`,
		schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=341757435/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`
	},
	{
		//isdone
		id: 7,
		img: '/assets/img/trainers/tutors-7.jpg',
		name: 'Amalia Weediyanti',
		desc: `Cell Culture for Engineers, Heat Transfer`,
		experience: `Amalia graduated from Bioprocess Engineering University of Indonesia in 2021. She teaches Cell Culture and Heat Transfer since 2020.`,
		media: {
			fb: null,
			tw: null,
			ig: 'https://www.instagram.com/amaliaweediy/',
			linked: 'https://www.linkedin.com/in/amalia-weediyanti-5882b0232/',
			research: null
		},
		rating: '4,74 / 5,0',
		review: '11',
		about: `Amalia has a Bachelor’s Degree in Engineering. She graduated from Bioprocess Engineering, University of Indonesia, in 2021 with a cumlaude predicate. She teaches Cell Culture and Heat Transfer in Torche since 2020. Her undergraduate thesis was about microalgae. The title of her thesis is “The Effect of Types and Concentration of Nitrogen Sources in Cultivation Media on the Content and Antioxidant Activity of Phycocyanin from Spirulina platensis Microalgae”. During her time at University, she was a lecturer assistant for Statistics and Probability. She was also a part of Ikatan Mahasiswa Teknik Kimia (IMTK) and Society for Biological Engineering (SBE). She speaks Indonesian, English, and a little bit of German. She is now about to start her early career in Boehringer Ingelheim.`,
		schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=258252140/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`
	},
	{
		//isdone
		id: 8,
		img: '/assets/img/trainers/tutors-8.jpg',
		name: 'Sharen Kevin',
		desc: `Mass and Energy Balance, Process Engineering Drawing`,
		experience: `Sharen graduated from Universitas Indonesia with bachelor degree in chemical engineering. She teaches Mass & Energy Balances and Engineering Drawing.`,
		media: {
			fb: null,
			tw: null,
			ig: 'https://www.instagram.com/sharenkevin/',
			linked: 'http://www.linkedin.com/in/sharenkevin',
			research: null
		},
		rating: '4,7 / 5,0',
		review: '8',
		about: `Sharen graduated from Universitas Indonesia with bachelor degree in chemical engineering. She teaches Mass & Energy Balances and Engineering Drawing. Her undegraduate thesis was about photocatalysis focusing on antibactetial and self-cleaning coating. During her university years,
      She was an assistant lecturer for Thermal & Mechanics Physics and Mass & Energy Balances and a laboratory assistant for Basics & Organics Chemistry. `,
		schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=1235378485/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`
	},
	{
		//isdone
		id: 9,
		img: '/assets/img/trainers/tutors-9.jpg',
		name: 'Muhammad Arif Darmawan',
		desc: `Fundamentals of Analytical Chemistry, Fundamentals of Chemistry, Organic Chemistry for Engineers`,
		experience: `Arif is someone who is innovative, collaborative and has an interest in the world of education and science`,
		media: {
			fb: null,
			tw: null,
			ig: null,
			linked: null,
			research: null
		},
		rating: '4,67 / 5,0',
		review: '6',
		about: `I am someone who is pursuing a doctoral study program (S3) in the field of biorefinery. I am the best graduate of UI Parallel Chemistry with a GPA of 3.42 and Master of Chemical Engineering at UI with a GPA of 3.69. Has experience teaching high school chemistry Olympiad and basic chemistry courses such as basic chemistry, organic chemistry and analytical chemistry. Has 10 Scopus indexed publications with 3 Q1 articles and 1 Q2 article. I have a Scopus H Index and a google scholar of 3 and 4 . respectively`,
		schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=20045515/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`
	},
	{
		//isdone
		id: 10,
		img: '/assets/img/trainers/tutors-10.jpg',
		name: 'Syahdan Amir Muhammad',
		desc: `Chemical Engineering Thermodynamics, Chemical Reaction Engineering, Fundamentals of Heat Transfer, Transport Phenomena`,
		experience: `Syahdan is a Master of Chemical Engineering candidate at Institut Teknologi Bandung, which has been experienced as an assistant lecturer and laboratory assistant coordinator. He also has been awarded with LPDP Kemenkeu RI (PK-153)`,
		media: {
			fb: null,
			tw: null,
			ig: null,
			linked: 'https://www.linkedin.com/in/syahdan-amir-muhammad-8323b9144/',
			research: null
		},
		rating: '4,69 / 5,0',
		review: '14',
		about: `Syahdan has been graduated from Chemical Engineering of ITS in 2018 with 3,71 GPA and currently pursuing master degree of Chemical Engineering at ITB. In his professional career, he has experienced as Regional Logistics unit Head at PT. Propan Raya ICC - Branch Makassar for a year. During his master study, he was experienced as Assistant Lecturer of "Advanced Chemical Engineering Thermodynamics" and Lab. Assistant Coordinator of "Measurement and Analytical Method Laboratory".
      <br>Field of Research: Biorefinery, fermentation technology, and lignocellulose fractionation<br>
      <b>Scientific publication:</b> <br>Food Safety Analysis and Improvement Concept of p -Carotene Extraction from Fungal Fermented Palm Oil Empty Fruit Bunches (EFB); Extraction Method and Solvent Selection`,
		schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=1441497619/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`
	},
	{
		//isdone
		id: 11,
		img: '/assets/img/trainers/tutors-11.jpg',
		name: 'Athallia Qatrunnada',
		desc: `Biochemical Engineering, Biological Cell`,
		experience: '',
		media: {
			fb: null,
			tw: null,
			ig: null,
			linked: null,
			research: null
		},
		rating: '0,0 / 5,0',
		review: '0',
		about: ``,
		schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=533380482/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`
	},
	{
		//isdone
		id: 12,
		img: '/assets/img/trainers/tutors-12.jpg',
		name: 'Ridzki Ramadhan',
		desc: `Chemical Process Simulation, Process Plant Design`,
		experience: `Ridzki is a process engineer at one of the Petrochemical Plant in Indonesia. He graduated from Chemical Engineering ITS Surabaya.`,
		media: {
			fb: null,
			tw: null,
			ig: `https://www.instagram.com/ridzki93/`,
			linked: 'https://id.linkedin.com/in/ridzki-ramadhan-158b55108',
			research: null
		},
		rating: '0,0 / 5,0',
		review: '0',
		about: `Process engineer from on of the petrochemical plant in Indonesia. Several times as guest lecturer at STEM Akamigas Cepu.`,
		schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=336568314/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`
	},
	{
		//isdone
		id: 13,
		img: '/assets/img/trainers/tutors-13.jpg',
		name: 'Nadia Mumtazah',
		desc: `Chemical Reaction Engineering, Mass and Energy Balances`,
		experience: `Nadia is a lecturer in one of university in banten. She achieved her master degree in National Taiwan University of Science and Technology`,
		media: {
			fb: null,
			tw: null,
			ig: 'https://instagram.com/nadiaamumtaz',
			linked: null,
			research: null
		},
		rating: '4,8 / 5,0',
		review: '4',
		about: `<b>GPA</b><br>- Bachelor : 3.83<br> - Master : 3.73<br><br>
      <b>Experience</b><br>
      - Assistant of Organic Chemistry Laboratory<br>
      - Assistant of Analytical Chemistry Laboratory<br>
      - Lecturer of P3TIK - FT UNTIRTA<br><br>

      <b>Achievement</b><br>
      - Silver award at 38th Taiwan Catalyst and Reaction Engineering Symposium<br>
      - Best Presentation at 11th ICAST (International Student Conference on Advance Science and Technology), Japan<br>
      - Delegation of Japan-Asia Youth Exchange Scholarship Program at Kumamoto University, Japan<br><br>

      <b>Publication</b><br>
      - Computational Liquid Dynamic Simulation Mixing Time from Side Inlet Mixer Tank`,
		schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=1281159756/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`
	},
	{
		//isdone
		id: 14,
		img: '/assets/img/trainers/tutors-14.jpg',
		name: 'Riswanda Himawan',
		desc: `Chemical Process Simulation, Process Equipment Design`,
		experience: `Process Engineer Petrochemical and Chemical Engineer enthausiast`,
		media: {
			fb: null,
			tw: null,
			ig: 'https://www.instagram.com/riswandahimawan/',
			linked: 'https://id.linkedin.com/in/riswanda-himawan-5184aa137',
			research: null
		},
		rating: '4,7 / 5,0',
		review: '3',
		about: `Petrochemical Process Engineer who graduated from Institute Technology of Sepuluh Nopember Surabaya with GPA 3.90 and appreciated as best ITS GPA 2018, has experience as Chemical Engineer tutor since in campus and belong to increase PP Plant capacity project from 480 to 590 KTA`,
		schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=184355625/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`
	},
	{
		//isdone
		id: 15,
		img: '/assets/img/trainers/tutors-15.jpg',
		name: 'Shafira Nur Adiningsih',
		desc: `Chemical Engineering Thermodynamics, Mass and Energy Balances, Numerical Computation for Engineers`,
		experience: '',
		media: {
			fb: null,
			tw: null,
			ig: null,
			linked: null,
			research: null
		},
		rating: ' 4,5 / 5,0',
		review: '1',
		about: ``,
		schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=1190485885/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`
	},
	{
		//isdone
		id: 16,
		img: '/assets/img/trainers/tutors-16.jpg',
		name: 'Sabtin Maulidiyah Hani',
		desc: `Fundamentals of Analytical Chemistry, Fundamentals of Chemistry`,
		experience: `Hani has over 3 years-experience in analytical chemistry laboratory. She started teaching in analytical chemistry field since 2018 as laboratory teaching assistant at Universitas Negeri Malang (UM).`,
		media: {
			fb: `https://www.facebook.com/sabtin.hani`,
			tw: null,
			ig: 'https://www.instagram.com/sabtinhani',
			linked: 'https://id.linkedin.com/in/sabtinhani',
			research: null
		},
		rating: '4,8 / 5,0',
		review: '2',
		about: `D III: Polytechnic of AKA Bogor (2013-2016) IPK: 3.55 <br>S-1: Malang State University (UM) (2017-2019) IPK: 3.60<br> S-2 : Institute of Technology Bandung (ITB) (2020-2022) IPK : 3.85<br><br><b>Experience:</b><br>QA Microbiology intern at PT. Capsugel Indonesia (2015)<br>
      Tutor of National Exam (Chemistry Subject) (2017)<br>
      Fundamentals of Chemistry Laboratory Teaching Assistant at ITB (2021)<br>
      Separation method and electrochemical Laboratory Teaching Assistant at ITB (2021)<br>
      Environmental Chemistry Laboratory Assistant at UM (2018)<br>
      Publication: Second author of Exploration of the leached Fe geochemical fractions in Tiga Warna Beach sediment, Indonesia<br>`,
		schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=217406522/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`
	},
	{
		//isdone
		id: 17,
		img: '/assets/img/trainers/tutors-17.jpg',
		name: 'Yulia Dwi Putri',
		desc: `Organic Chemistry for Engineers`,
		experience: `Organic chemistry tutors at TORCHE Education`,
		media: {
			fb: null,
			tw: null,
			ig: 'https://www.instagram.com/yuliadwptri/?hl=en',
			linked: 'https://www.linkedin.com/in/yulia-dwi-putri-524686137/',
			research: null
		},
		rating: ' 0,0 / 5,0',
		review: '0',
		about: `Lulusan Kimia ITB tahun 2018 dan Pengajaran Kimia ITB 2022.<br>
      Menjadi asisten praktikum laboratorium kimia dasar ITB (2016-2017)<br> Menjadi asisten praktikum laboratorium kimia organik (ITB) (2018)<br>
      Menjadi pimpinan praktikum laboratorium kimia dasar ITB (2020-2021)<br>
      Guru kimia di SMA Boarding School Motivator Qur'an Ekselensia Indonesia (2021-Now)<br>
      Magang di laboratorium forensik Mabes Polri (2017)<br>`,
		schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=1395972756/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`
	},
	{
		//isdone
		id: 18,
		img: '/assets/img/trainers/tutors-18.jpg',
		name: 'Yevonnael Andrew',
		desc: `Fundamentals of Physics, Numerical Computation for Engineers, Statistics & Probability`,
		experience: '',
		media: {
			fb: null,
			tw: null,
			ig: null,
			linked: null,
			research: null
		},
		rating: ' 0,0 / 5,0',
		review: '0',
		about: ``,
		schedule: ` <iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=232143025/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`
	},
	{
		//isdone
		id: 19,
		img: '/assets/img/trainers/tutors-19.jpg',
		name: 'Nur Hendri Wahyu Firdaus',
		desc: `Fundamentals of Mass Transfer`,
		experience: `Hendri has been teaching chemical engineering since he was in college and has been a laboratory engineer for at least four years at the National Institute of Technology Malang. He had experience handling waste research and laboratory analysis.`,
		media: {
			fb: null,
			tw: null,
			ig: 'https://www.instagram.com/hendry_wf/',
			linked: 'https://linkedin.com/in/nurhendriwahyuf',
			research: null
		},
		rating: ' 0,0 / 5,0',
		review: '0',
		about: `Hendri is a chemical engineering graduate. He completed his bachelor's degree at the National Institute of Technology Malang with fully funded scholarships. He was experienced in laboratory practice, production processes in agribusiness companies, and research in waste technologies. He graduated with honors and became the best graduate in 2021.
      He completed his bachelor's degree by making his final project Acetic Anhydride with Ketene Process and Research in Microbiology using Local Microorganisms as a Bio-activator. He has also published an AlP journal in Applied Science focused on renewable energy and equipment efficiency. `,
		schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=563776228/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`
	},
	{
		//isdone
		id: 20,
		img: '/assets/img/trainers/tutors-20.jpg',
		name: 'Adam Aji Prayoga',
		desc: `Fundamentals of Chemistry, Fundamentals of Analytical Chemistry`,
		experience: '',
		media: {
			fb: null,
			tw: null,
			ig: null,
			linked: null,
			research: null
		},
		rating: ' 0,0 / 5,0',
		review: '0',
		about: ``,
		schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=2058222731/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`
	},
	{
		//isdone
		id: 21,
		img: '/assets/img/trainers/tutors-21.jpg',
		name: 'Ajeng Triane Syawalia',
		desc: `Fundamental of Chemistry`,
		experience: `Chemistry Lecturer, Chemistry Tutor`,
		media: {
			fb: null,
			tw: null,
			ig: 'https://www.instagram.com/ajeng_syawalia/',
			linked: 'https://id.linkedin.com/in/ajengtrianes',
			research: null
		},
		rating: '0,0 / 5,0',
		review: '0',
		about: `Chemistry Lecturer at Universitas Islam Nusantara and Akademi Industri Tekstil Bandung.<br>
      Assistant Lecturer for Organic Chemistry 2015-2017 at Institut Teknologi Bandung.<br> Chemistry Tutor for high school students with a strong background in Masters of Chemistry to guide students into preparation for the National Science Competition and Cambridge IGCSE Level Examinations. `,
		schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=1180678746/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`
	}
];
