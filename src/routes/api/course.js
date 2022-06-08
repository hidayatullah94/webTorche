export async function get() {
	const course = [
		{
			id: 1,
			img: '../assets/img/courses/course-calculus.webp',
			subTitle: 'Basic Engineering',
			rating: '9/10',
			title: 'Fundamentals of Calculus',
			desc: 'This course provides student with mathematical knowledge and analytical skills so that they are able to apply techniques of calculus to solve scientific and engineering problems.',
			tutor: {
				tutor1: {
					name: 'Syailendra',
					photo: '../assets/img/trainers/tutors-5.jpg',
					rating: '4,62 / 5,0',
					descs: `Chemical Engineering Mathematics, Fundamentals of Calculus, Fluid Particle Mechanics, Numerical Computation for Engineers`,
					review: '44',
					about: `Syailendra currently pursuing master degree in chemical engineering at Institut Teknologi Bandung. He obtained his bachelor degree in chemical engineering from Universitas Indonesia and become research assistant there. Previously, he became lecturer assistant in some chemical engineering subjects at Universitas Indonesia, namely numerical computation, chemical engineering modelling, bioreactor engineering, and bioprocess equipment design course.`,
					schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=853803407/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`
				},
				tutor2: {
					name: '',
					link: '',
					photo: ''
				},
				tutor3: {
					name: '',
					link: '',
					photo: ''
				}
			}
		},

		{
			id: 2,
			img: '../assets/img/courses/course-physics1.webp',
			subTitle: 'Basic Engineering',
			rating: '8,7/10',
			title: 'Fundamentals of Physics - Mechanics & Heat',
			desc: `This course provides introduction to basic physics for engineers and knowledge and problems in newton's law of motion and conservation of energy.`,
			tutor: {
				tutor1: {
					name: 'Yevonnael',
					photo: '../assets/img/trainers/tutors-18.jpg',
					rating: ' 0,0 / 5,0',
					review: '0',
					about: ``,
					schedule: ` <iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=232143025/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Fundamentals of Physics, Numerical Computation for Engineers, Statistics & Probability`
				},
				tutor2: {
					name: '',
					link: '',
					photo: ''
				},
				tutor3: {
					name: '',
					link: '',
					photo: ''
				}
			}
		},

		{
			id: 3,
			img: '../assets/img/courses/course-physics2.webp',
			subTitle: 'Basic Engineering',
			rating: '0/10',
			title: `Fundamentals of Physics - Magnets, Electrics, Waves, Optics`,
			desc: `This course provides basic physics for engineers in magnets, electrics, waves, and optics problems. Subjects including modern physics, electromagnets, and light will be covered.`,
			tutor: {
				tutor1: {
					name: 'Yevonnael',
					photo: '../assets/img/trainers/tutors-18.jpg',
					rating: ' 0,0 / 5,0',
					review: '0',
					about: ``,
					schedule: ` <iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=232143025/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Fundamentals of Physics, Numerical Computation for Engineers, Statistics & Probability`
				},
				tutor2: {
					name: '',
					link: '',
					photo: ''
				},
				tutor3: {
					name: '',
					link: '',
					photo: ''
				}
			}
		},
		{
			id: 4,
			img: '../assets/img/courses/course-chemistry.webp',
			subTitle: 'Basic Engineering',
			rating: '8/10',
			title: `Fundamentals of Chemistry`,
			desc: `This course will provide basics and fundamentals of chemistry to solve common problems in engineering. The course covers subjects in chemical reaction, thermochemistry, chemical equilibrium, electrochemistry, and kinetics.`,
			tutor: {
				tutor1: {
					name: 'Ajeng',
					photo: '../assets/img/trainers/tutors-21.jpg',
					rating: '0,0 / 5,0',
					review: '0',
					about: `Chemistry Lecturer at Universitas Islam Nusantara and Akademi Industri Tekstil Bandung.<br>
              Assistant Lecturer for Organic Chemistry 2015-2017 at Institut Teknologi Bandung.<br> Chemistry Tutor for high school students with a strong background in Masters of Chemistry to guide students into preparation for the National Science Competition and Cambridge IGCSE Level Examinations. `,
					schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=1180678746/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Fundamental of Chemistry`
				},
				tutor2: {
					name: 'Adam',
					photo: '../assets/img/trainers/tutors-20.jpg',
					rating: ' 0,0 / 5,0',
					review: '0',
					about: ``,
					schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=2058222731/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Fundamentals of Chemistry, Fundamentals of Analytical Chemistry`
				},
				tutor3: {
					name: 'Hani',
					photo: '../assets/img/trainers/tutors-16.jpg',
					rating: '4,8 / 5,0',
					review: '2',
					about: `D III: Polytechnic of AKA Bogor (2013-2016) IPK: 3.55 <br>S-1: Malang State University (UM) (2017-2019) IPK: 3.60<br> S-2 : Institute of Technology Bandung (ITB) (2020-2022) IPK : 3.85<br><br><b>Experience:</b><br>QA Microbiology intern at PT. Capsugel Indonesia (2015)<br>
              Tutor of National Exam (Chemistry Subject) (2017)<br>
              Fundamentals of Chemistry Laboratory Teaching Assistant at ITB (2021)<br>
              Separation method and electrochemical Laboratory Teaching Assistant at ITB (2021)<br>
              Environmental Chemistry Laboratory Assistant at UM (2018)<br>
              Publication: Second author of Exploration of the leached Fe geochemical fractions in Tiga Warna Beach sediment, Indonesia<br>`,
					schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=217406522/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Fundamentals of Analytical Chemistry, Fundamentals of Chemistry`
				}
			}
		},
		{
			id: 5,
			img: '../assets/img/courses/course-statistics.webp',
			subTitle: 'Basic Engineering',
			rating: '8/10',
			title: `Statistics and Probability`,
			desc: `Statistics and probability course will introduce basics in statistics for engineers, statistics tests, and probability to solve common problems in engineering and daily life.`,
			tutor: {
				tutor1: {
					name: 'Yevonnael',
					photo: '../assets/img/trainers/tutors-18.jpg',
					rating: ' 0,0 / 5,0',
					review: '0',
					about: ``,
					schedule: ` <iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=232143025/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Fundamentals of Physics, Numerical Computation for Engineers, Statistics & Probability`
				},
				tutor2: {
					name: '',
					link: '',
					photo: ''
				},
				tutor3: {
					name: '',
					link: '',
					photo: ''
				}
			}
		},
		{
			id: 6,
			img: '../assets/img/courses/course-engeco.webp',
			subTitle: 'Basic Engineering',
			rating: '9,6/10',
			title: `Engineering Economy`,
			desc: `The engineering economy course covers subjects including time value of money, ROR, cost analysis, project financing, and sensitivty analysis. The course also provides real-life problems including industry-related economy problems.`,
			tutor: {
				tutor1: {
					name: 'Arya',
					photo: '../assets/img/trainers/tutors-3.jpg',
					rating: '4,8 / 5,0',
					review: '22',
					about: `Arya graduated from Universitas Indonesia, with bachelor degree in bioprocess Engineering and master degree in chemical engineering. Currently, he is the Chief Executive Officer at TORCHE Education and tutors in engineering economy, product design, and plant design course. Arya experienced in faty acid manufacturing when he was an intern at Unilever Oleochemical Indonesia. He became research assistant at Universitas Indonesia at 2016 and lecturer assistant in numerous courses at Universitas Indonesia. `,
					schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=1509109124/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Bioprocess Engineering, Engineering Economy`
				},
				tutor2: {
					name: '',
					link: '',
					photo: ''
				},
				tutor3: {
					name: '',
					link: '',
					photo: ''
				}
			}
		},
		{
			id: 7,
			img: '../assets/img/courses/course-achem.webp',
			subTitle: 'Basic Process Engineering',
			rating: '9/10',
			title: `Fundamentals of Analytical Chemistry`,
			desc: `This course covers basics and fundamentals of analytical and instrumental chemistry, including gravimetry, titrations, electrochemical, potentiometry, specstroscopy, and chromatography.`,
			tutor: {
				tutor1: {
					name: 'Hani',
					photo: '../assets/img/trainers/tutors-16.jpg',
					rating: '4,8 / 5,0',
					review: '2',
					about: `D III: Polytechnic of AKA Bogor (2013-2016) IPK: 3.55 <br>S-1: Malang State University (UM) (2017-2019) IPK: 3.60<br> S-2 : Institute of Technology Bandung (ITB) (2020-2022) IPK : 3.85<br><br><b>Experience:</b><br>QA Microbiology intern at PT. Capsugel Indonesia (2015)<br>
              Tutor of National Exam (Chemistry Subject) (2017)<br>
              Fundamentals of Chemistry Laboratory Teaching Assistant at ITB (2021)<br>
              Separation method and electrochemical Laboratory Teaching Assistant at ITB (2021)<br>
              Environmental Chemistry Laboratory Assistant at UM (2018)<br>
              Publication: Second author of Exploration of the leached Fe geochemical fractions in Tiga Warna Beach sediment, Indonesia<br>`,
					schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=217406522/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Fundamentals of Analytical Chemistry, Fundamentals of Chemistry`
				},
				tutor2: {
					name: 'Arif',
					photo: '../assets/img/trainers/tutors-9.jpg',
					rating: '4,67 / 5,0',
					review: '6',
					about: `I am someone who is pursuing a doctoral study program (S3) in the field of biorefinery. I am the best graduate of UI Parallel Chemistry with a GPA of 3.42 and Master of Chemical Engineering at UI with a GPA of 3.69. Has experience teaching high school chemistry Olympiad and basic chemistry courses such as basic chemistry, organic chemistry and analytical chemistry. Has 10 Scopus indexed publications with 3 Q1 articles and 1 Q2 article. I have a Scopus H Index and a google scholar of 3 and 4 . respectively`,
					schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=20045515/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Fundamentals of Analytical Chemistry, Fundamentals of Chemistry, Organic Chemistry for Engineers`
				},
				tutor3: {
					name: 'Adam',
					photo: '../assets/img/trainers/tutors-20.jpg',
					rating: ' 0,0 / 5,0',
					review: '0',
					about: ``,
					schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=2058222731/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Fundamentals of Chemistry, Fundamentals of Analytical Chemistry`
				}
			}
		},
		{
			id: 8,
			img: '../assets/img/courses/course-cellcult.webp',
			subTitle: 'Basic Process Engineering',
			rating: '9,8/10',
			title: `Cell Culture for Engineers`,
			desc: `Cell culture course is a specialization course for bioprocess engineers, that covers subjects in tissue culture, animal culture, and bioprocess cell culture.`,
			tutor: {
				tutor1: {
					name: 'Amalia',
					photo: '../assets/img/trainers/tutors-7.jpg',
					rating: '4,74 / 5,0',
					review: '11',
					about: `Amalia has a Bachelor’s Degree in Engineering. She graduated from Bioprocess Engineering, University of Indonesia, in 2021 with a cumlaude predicate. She teaches Cell Culture and Heat Transfer in Torche since 2020. Her undergraduate thesis was about microalgae. The title of her thesis is “The Effect of Types and Concentration of Nitrogen Sources in Cultivation Media on the Content and Antioxidant Activity of Phycocyanin from Spirulina platensis Microalgae”. During her time at University, she was a lecturer assistant for Statistics and Probability. She was also a part of Ikatan Mahasiswa Teknik Kimia (IMTK) and Society for Biological Engineering (SBE). She speaks Indonesian, English, and a little bit of German. She is now about to start her early career in Boehringer Ingelheim.`,
					schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=258252140/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Cell Culture for Engineers, Heat Transfer`
				},
				tutor2: {
					name: '',
					link: '',
					photo: ''
				},
				tutor3: {
					name: '',
					link: '',
					photo: ''
				}
			}
		},
		{
			id: 9,
			img: '../assets/img/courses/course-chetermo.webp',
			subTitle: 'Basic Process Engineering',
			rating: '8,9/10',
			title: `Chemical Engineering Thermodynamics`,
			desc: `This course covers subjects in basic thermodynamics, ideal and non-ideal properties, process cycle, vapor-liquid equilibrium, and chemical equilibirium reaction.`,
			tutor: {
				tutor1: {
					name: 'Shafira',
					photo: '../assets/img/trainers/tutors-15.jpg',
					rating: ' 4,5 / 5,0',
					review: '1',
					about: ``,
					schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=1190485885/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Chemical Engineering Thermodynamics, Mass and Energy Balances, Numerical Computation for Engineers`
				},
				tutor2: {
					name: 'Syahdan',
					photo: '../assets/img/trainers/tutors-10.jpg',
					rating: '4,69 / 5,0',
					review: '14',
					about: `Syahdan has been graduated from Chemical Engineering of ITS in 2018 with 3,71 GPA and currently pursuing master degree of Chemical Engineering at ITB. In his professional career, he has experienced as Regional Logistics unit Head at PT. Propan Raya ICC - Branch Makassar for a year. During his master study, he was experienced as Assistant Lecturer of "Advanced Chemical Engineering Thermodynamics" and Lab. Assistant Coordinator of "Measurement and Analytical Method Laboratory".
              <br>Field of Research: Biorefinery, fermentation technology, and lignocellulose fractionation<br>
              <b>Scientific publication:</b> <br>Food Safety Analysis and Improvement Concept of p -Carotene Extraction from Fungal Fermented Palm Oil Empty Fruit Bunches (EFB); Extraction Method and Solvent Selection`,
					schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=1441497619/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Chemical Engineering Thermodynamics, Chemical Reaction Engineering, Fundamentals of Heat Transfer, Transport Phenomena`
				},
				tutor3: {
					name: 'Samuel',
					photo: '../assets/img/trainers/tutors-6.jpg',
					rating: '4,6 / 5,0',
					review: '156',
					about: `Samuel is a process engineer and educator graduated from Universitas Indonesia (2019) and Institut Teknologi Bandung (2022) majoring in chemical engineering. As a process engineer, Samuel has handled many projects in oil and gas indsutries and petrochemical industries across Indonesia. Some of them are PT. Pertamina's (Persero) CB-III Pipeline project, BBWM Refrigeration FEED, PT Bukit Asam TBBC at South Sumatera,
              PT Petromine's Biodiesel storage, PT. Medco Energy's Water-Oil separator improvement, etc.<br><br> As an educator, Samuel teaches more than 200 students in chemical engineering and become lecturer assistant since he was studying at Universitas Indonesia. He teaches
              numerous subjects in chemical engineering and specialized in Computer-Aided Chemical Engineering. Samuel skilled in most process engineering softwares, such as Unisim Design, Aspen HYSYS, Aspen Plus, COMSOL Multiphysics, ANSYS, and Schlumberger PIPESIM and Symmetry.`,
					schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=341757435/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Chemical Engineering Mathematics, Chemical Engineering Thermodynamics, Process Equipment Design`
				}
			}
		},
		{
			id: 10,
			img: '../assets/img/courses/course-chereaction.webp',
			subTitle: 'Basic Process Engineering',
			rating: '9,2/10',
			title: `Chemical Reaction Engineering`,
			desc: `This course covers chemical reaction kinetics and mechanism, diffusion, multiple reactions, reactors and sizing, steady-state and unsteady-state operations, and non-isothermal reactors`,
			tutor: {
				tutor1: {
					name: 'Nadia',
					photo: '../assets/img/trainers/tutors-13.jpg',
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
					schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=1281159756/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Chemical Reaction Engineering, Mass and Energy Balances`
				},
				tutor2: {
					name: 'Syahdan',
					photo: '../assets/img/trainers/tutors-10.jpg',
					rating: '4,69 / 5,0',
					review: '14',
					about: `Syahdan has been graduated from Chemical Engineering of ITS in 2018 with 3,71 GPA and currently pursuing master degree of Chemical Engineering at ITB. In his professional career, he has experienced as Regional Logistics unit Head at PT. Propan Raya ICC - Branch Makassar for a year. During his master study, he was experienced as Assistant Lecturer of "Advanced Chemical Engineering Thermodynamics" and Lab. Assistant Coordinator of "Measurement and Analytical Method Laboratory".
              <br>Field of Research: Biorefinery, fermentation technology, and lignocellulose fractionation<br>
              <b>Scientific publication:</b> <br>Food Safety Analysis and Improvement Concept of p -Carotene Extraction from Fungal Fermented Palm Oil Empty Fruit Bunches (EFB); Extraction Method and Solvent Selection`,
					schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=1441497619/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Chemical Engineering Thermodynamics, Chemical Reaction Engineering, Fundamentals of Heat Transfer, Transport Phenomena`
				},
				tutor3: {
					name: 'Leon',
					photo: '../assets/img/trainers/tutors-2.jpg',
					about: `Leon currently pursuing Master of Science in Chemical Engineering at National Taiwan University of Science and Technology, Taipei. At TORCHE Education, he is a co-founder and tutor in chemical reaction engineering course. Leon graduated from Unviersitas Indonesia, and he was a lecturer assistant in numerous subjects, including product design and plant design course.`,
					review: '97',
					rating: '4,79 / 5,0',
					schedule: `<iframe style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=903016931/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Chemical Reaction Engineering`
				}
			}
		},
		{
			id: 11,
			img: '../assets/img/courses/course-fluidmech.webp',
			subTitle: 'Basic Process Engineering',
			rating: '9,6/10',
			title: `Fluid & Particles Mechanics`,
			desc: `Subjects covered in this course are properties of fluid, compressible and incompressible fluid, flow equipments (pumps, blowers, compressors), boundary layer, fluidized and fixed bed, and motion of particle.`,
			tutor: {
				tutor1: {
					name: 'Felix',
					photo: '../assets/img/trainers/tutors-1.jpg',
					about: `Felix is currently Head of Section - Logistic Solution at Wings Group Indonesia (PT. Sayap Mas Utama). He is graduated from Universitas Indonesia with 3,91 GPA. While he was a student at Universitas
              Indonesia, he became lecturer assistant in transport phenomena and plant design course. At TORCHE Education, he tutors some subjects including transport phenomena, fluid mechanics, product design, and plant design.`,
					review: '277',
					rating: '4,9 / 5,0',
					schedule: `<iframe style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=134206045/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Process Plant Design, Product Design and Development, Transport Phenomena, Fluid and Particle Mechanics`
				},
				tutor2: {
					name: 'Syailendra',
					photo: '../assets/img/trainers/tutors-5.jpg',
					rating: '4,62 / 5,0',
					descs: `Chemical Engineering Mathematics, Fundamentals of Calculus, Fluid Particle Mechanics, Numerical Computation for Engineers`,
					review: '44',
					about: `Syailendra currently pursuing master degree in chemical engineering at Institut Teknologi Bandung. He obtained his bachelor degree in chemical engineering from Universitas Indonesia and become research assistant there. Previously, he became lecturer assistant in some chemical engineering subjects at Universitas Indonesia, namely numerical computation, chemical engineering modelling, bioreactor engineering, and bioprocess equipment design course.`,
					schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=853803407/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`
				},
				tutor3: {
					name: '',
					link: '',
					photo: ''
				}
			}
		},
		{
			id: 12,
			img: '../assets/img/courses/course-heattrans.webp',
			subTitle: 'Basic Process Engineering',
			rating: '8,7/10',
			title: `Fundamentals of Heat Transfer`,
			desc: `This course provides basic heat transfer principles: conduction, convection, and radiation, with some application in process engineering, including heat exchanger.`,
			tutor: {
				tutor1: {
					name: 'Amalia',
					photo: '../assets/img/trainers/tutors-7.jpg',
					rating: '4,74 / 5,0',
					review: '11',
					about: `Amalia has a Bachelor’s Degree in Engineering. She graduated from Bioprocess Engineering, University of Indonesia, in 2021 with a cumlaude predicate. She teaches Cell Culture and Heat Transfer in Torche since 2020. Her undergraduate thesis was about microalgae. The title of her thesis is “The Effect of Types and Concentration of Nitrogen Sources in Cultivation Media on the Content and Antioxidant Activity of Phycocyanin from Spirulina platensis Microalgae”. During her time at University, she was a lecturer assistant for Statistics and Probability. She was also a part of Ikatan Mahasiswa Teknik Kimia (IMTK) and Society for Biological Engineering (SBE). She speaks Indonesian, English, and a little bit of German. She is now about to start her early career in Boehringer Ingelheim.`,
					schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=258252140/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Cell Culture for Engineers, Heat Transfer`
				},
				tutor2: {
					name: 'Syahdan',
					photo: '../assets/img/trainers/tutors-10.jpg',
					rating: '4,69 / 5,0',
					review: '14',
					about: `Syahdan has been graduated from Chemical Engineering of ITS in 2018 with 3,71 GPA and currently pursuing master degree of Chemical Engineering at ITB. In his professional career, he has experienced as Regional Logistics unit Head at PT. Propan Raya ICC - Branch Makassar for a year. During his master study, he was experienced as Assistant Lecturer of "Advanced Chemical Engineering Thermodynamics" and Lab. Assistant Coordinator of "Measurement and Analytical Method Laboratory".
              <br>Field of Research: Biorefinery, fermentation technology, and lignocellulose fractionation<br>
              <b>Scientific publication:</b> <br>Food Safety Analysis and Improvement Concept of p -Carotene Extraction from Fungal Fermented Palm Oil Empty Fruit Bunches (EFB); Extraction Method and Solvent Selection`,
					schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=1441497619/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Chemical Engineering Thermodynamics, Chemical Reaction Engineering, Fundamentals of Heat Transfer, Transport Phenomena`
				},
				tutor3: {
					name: '',
					link: '',
					photo: ''
				}
			}
		},
		{
			id: 13,
			img: '../assets/img/courses/course-massenergy.webp',
			subTitle: 'Basic Process Engineering',
			rating: '9,4/10',
			title: `Mass and Energy Balances`,
			desc: `This basic course for process engineers discuss mass balance, energy balance, reactions, separations, and processes that commonly faced by process engineers.`,
			tutor: {
				tutor1: {
					name: 'Sharen',
					photo: '../assets/img/trainers/tutors-8.jpg',
					rating: '4,7 / 5,0',
					review: '8',
					about: `Sharen graduated from Universitas Indonesia with bachelor degree in chemical engineering. She teaches Mass & Energy Balances and Engineering Drawing. Her undegraduate thesis was about photocatalysis focusing on antibactetial and self-cleaning coating. During her university years,
              She was an assistant lecturer for Thermal & Mechanics Physics and Mass & Energy Balances and a laboratory assistant for Basics & Organics Chemistry. `,
					schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=1235378485/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Mass and Energy Balance, Process Engineering Drawing`
				},
				tutor2: {
					name: 'Nadia',
					photo: '../assets/img/trainers/tutors-13.jpg',
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
					schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=1281159756/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Chemical Reaction Engineering, Mass and Energy Balances`
				},
				tutor3: {
					name: 'Shafira',
					photo: '../assets/img/trainers/tutors-15.jpg',
					rating: ' 4,5 / 5,0',
					review: '1',
					about: ``,
					schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=1190485885/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Chemical Engineering Thermodynamics, Mass and Energy Balances, Numerical Computation for Engineers`
				}
			}
		},
		{
			id: 14,
			img: '../assets/img/courses/course-masstrans.webp',
			subTitle: 'Basic Process Engineering',
			rating: '8,4/10',
			title: `Fundamentals of Mass Transfer`,
			desc: `Mass transfer course discuss topics in diffusion, multicomponent distillation, absorption and stripping, extraction, drying, adsorption, and membrane separations.`,
			tutor: {
				tutor1: {
					name: 'Hendri',
					photo: '../assets/img/trainers/tutors-19.jpg',
					rating: ' 0,0 / 5,0',
					review: '0',
					about: `Hendri is a chemical engineering graduate. He completed his bachelor's degree at the National Institute of Technology Malang with fully funded scholarships. He was experienced in laboratory practice, production processes in agribusiness companies, and research in waste technologies. He graduated with honors and became the best graduate in 2021.
              He completed his bachelor's degree by making his final project Acetic Anhydride with Ketene Process and Research in Microbiology using Local Microorganisms as a Bio-activator. He has also published an AlP journal in Applied Science focused on renewable energy and equipment efficiency. `,
					schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=563776228/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Fundamentals of Mass Transfer`
				},
				tutor2: {
					name: 'Sendy',
					photo: '../assets/img/trainers/tutors-4.jpg',
					rating: '4,66 / 5,0',
					review: '203',
					about: `Sendy is a tutor and co-founder at TORCHE Education. He is a PDCA Officer at PT Sayap Mas Utama (Wings Group), managing supply chain in one of the biggest Fast Moving Consumer Goods company in Indonesia. Previously, he is an engineer at ExxonMobil, handling process control in oil and gas indsutry. He teaches process control and mass transfer subjects at TORCHE Education. `,
					schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=129721676/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Fundamentals of Mass Transfer, Process Control and Dynamics`
				},
				tutor3: {
					name: '',
					link: '',
					photo: ''
				}
			}
		},
		{
			id: 15,
			img: '../assets/img/courses/course-numcom.webp',
			subTitle: 'Basic Process Engineering',
			rating: '8,7/10',
			title: `Numerical Computation for Engineers`,
			desc: `This course provides various topics in numerical computations and methods, including linear-nonlinear equations, numerical integration-differentiation, and ordinary-partial differential equations.`,
			tutor: {
				tutor1: {
					name: 'Shafira',
					photo: '../assets/img/trainers/tutors-15.jpg',
					rating: ' 4,5 / 5,0',
					review: '1',
					about: ``,
					schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=1190485885/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Chemical Engineering Thermodynamics, Mass and Energy Balances, Numerical Computation for Engineers`
				},
				tutor2: {
					name: 'Yevonnael',
					photo: '../assets/img/trainers/tutors-18.jpg',
					rating: ' 0,0 / 5,0',
					review: '0',
					about: ``,
					schedule: ` <iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=232143025/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Fundamentals of Physics, Numerical Computation for Engineers, Statistics & Probability`
				},
				tutor3: {
					name: '',
					link: '',
					photo: ''
				}
			}
		},
		{
			id: 16,
			img: '../assets/img/courses/course-transportphen.webp',
			subTitle: 'Basic Process Engineering',
			rating: '9,3/10',
			title: `Transport Phenomena`,
			desc: `Transport phenomena course explains macro and micro balances phenomena that occurs in common until specific process engineering problems. The analysis is based on shell balances in a system.`,
			tutor: {
				tutor1: {
					name: 'Syahdan',
					photo: '../assets/img/trainers/tutors-10.jpg',
					rating: '4,69 / 5,0',
					review: '14',
					about: `Syahdan has been graduated from Chemical Engineering of ITS in 2018 with 3,71 GPA and currently pursuing master degree of Chemical Engineering at ITB. In his professional career, he has experienced as Regional Logistics unit Head at PT. Propan Raya ICC - Branch Makassar for a year. During his master study, he was experienced as Assistant Lecturer of "Advanced Chemical Engineering Thermodynamics" and Lab. Assistant Coordinator of "Measurement and Analytical Method Laboratory".
              <br>Field of Research: Biorefinery, fermentation technology, and lignocellulose fractionation<br>
              <b>Scientific publication:</b> <br>Food Safety Analysis and Improvement Concept of p -Carotene Extraction from Fungal Fermented Palm Oil Empty Fruit Bunches (EFB); Extraction Method and Solvent Selection`,
					schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=1441497619/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Chemical Engineering Thermodynamics, Chemical Reaction Engineering, Fundamentals of Heat Transfer, Transport Phenomena`
				},
				tutor2: {
					name: 'Felix',
					photo: '../assets/img/trainers/tutors-1.jpg',
					about: `Felix is currently Head of Section - Logistic Solution at Wings Group Indonesia (PT. Sayap Mas Utama). He is graduated from Universitas Indonesia with 3,91 GPA. While he was a student at Universitas
              Indonesia, he became lecturer assistant in transport phenomena and plant design course. At TORCHE Education, he tutors some subjects including transport phenomena, fluid mechanics, product design, and plant design.`,
					review: '277',
					rating: '4,9 / 5,0',
					schedule: `<iframe style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=134206045/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Process Plant Design, Product Design and Development, Transport Phenomena, Fluid and Particle Mechanics`
				},
				tutor3: {
					name: '',
					link: '',
					photo: ''
				}
			}
		},
		{
			id: 17,
			img: '../assets/img/courses/course-cheq.webp',
			subTitle: 'Advanced Process Engineering',
			rating: '8,8/10',
			title: `Process Equipment Design`,
			desc: `This course provides explanation in heuristics when conducting design in process equipment, from pipe, flow equipments, separation equipments, heat exchangers, etc.`,
			tutor: {
				tutor1: {
					name: 'Riswanda',
					photo: '../assets/img/trainers/tutors-14.jpg',
					rating: '4,7 / 5,0',
					review: '3',
					about: `Petrochemical Process Engineer who graduated from Institute Technology of Sepuluh Nopember Surabaya with GPA 3.90 and appreciated as best ITS GPA 2018, has experience as Chemical Engineer tutor since in campus and belong to increase PP Plant capacity project from 480 to 590 KTA`,
					schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=184355625/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Chemical Process Simulation, Process Equipment Design`
				},
				tutor2: {
					name: 'Samuel',
					photo: '../assets/img/trainers/tutors-6.jpg',
					rating: '4,6 / 5,0',
					review: '156',
					about: `Samuel is a process engineer and educator graduated from Universitas Indonesia (2019) and Institut Teknologi Bandung (2022) majoring in chemical engineering. As a process engineer, Samuel has handled many projects in oil and gas indsutries and petrochemical industries across Indonesia. Some of them are PT. Pertamina's (Persero) CB-III Pipeline project, BBWM Refrigeration FEED, PT Bukit Asam TBBC at South Sumatera,
              PT Petromine's Biodiesel storage, PT. Medco Energy's Water-Oil separator improvement, etc.<br><br> As an educator, Samuel teaches more than 200 students in chemical engineering and become lecturer assistant since he was studying at Universitas Indonesia. He teaches
              numerous subjects in chemical engineering and specialized in Computer-Aided Chemical Engineering. Samuel skilled in most process engineering softwares, such as Unisim Design, Aspen HYSYS, Aspen Plus, COMSOL Multiphysics, ANSYS, and Schlumberger PIPESIM and Symmetry.`,
					schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=341757435/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Chemical Engineering Mathematics, Chemical Engineering Thermodynamics, Process Equipment Design`
				},
				tutor3: {
					name: '',
					link: '',
					photo: ''
				}
			}
		},
		{
			id: 18,
			img: '../assets/img/courses/course-plantdesign.webp',
			subTitle: 'Advanced Process Engineering',
			rating: '9,2/10',
			title: `Process Plant Design`,
			desc: `As a capstone process engineering course, plant design includes topics in process synthesis, equipment design, heat exchanger network, process safety, and economical analysis of the plant.`,
			tutor: {
				tutor1: {
					name: 'Ridzki',
					photo: '../assets/img/trainers/tutors-12.jpg',
					rating: '0,0 / 5,0',
					review: '0',
					about: `Process engineer from on of the petrochemical plant in Indonesia. Several times as guest lecturer at STEM Akamigas Cepu.`,
					schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=336568314/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Chemical Process Simulation, Process Plant Design`
				},
				tutor2: {
					name: 'Felix',
					photo: '../assets/img/trainers/tutors-1.jpg',
					about: `Felix is currently Head of Section - Logistic Solution at Wings Group Indonesia (PT. Sayap Mas Utama). He is graduated from Universitas Indonesia with 3,91 GPA. While he was a student at Universitas
              Indonesia, he became lecturer assistant in transport phenomena and plant design course. At TORCHE Education, he tutors some subjects including transport phenomena, fluid mechanics, product design, and plant design.`,
					review: '277',
					rating: '4,9 / 5,0',
					schedule: `<iframe style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=134206045/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Process Plant Design, Product Design and Development, Transport Phenomena, Fluid and Particle Mechanics`
				},
				tutor3: {
					name: '',
					link: '',
					photo: ''
				}
			}
		},
		{
			id: 19,
			img: '../assets/img/courses/course-product.webp',
			subTitle: 'Advanced Process Engineering',
			rating: ' 8,9/10',
			title: `Product Design and Development`,
			desc: `This capstone course provides topics in chemical and biological product design, and discuss topics including product manufacture, supply chain, and economic analysis.`,
			tutor: {
				tutor1: {
					name: 'Arya',
					photo: '../assets/img/trainers/tutors-3.jpg',
					rating: '4,8 / 5,0',
					review: '22',
					about: `Arya graduated from Universitas Indonesia, with bachelor degree in bioprocess Engineering and master degree in chemical engineering. Currently, he is the Chief Executive Officer at TORCHE Education and tutors in engineering economy, product design, and plant design course. Arya experienced in faty acid manufacturing when he was an intern at Unilever Oleochemical Indonesia. He became research assistant at Universitas Indonesia at 2016 and lecturer assistant in numerous courses at Universitas Indonesia. `,
					schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=1509109124/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Bioprocess Engineering, Engineering Economy`
				},
				tutor2: {
					name: 'Felix',
					photo: '../assets/img/trainers/tutors-1.jpg',
					about: `Felix is currently Head of Section - Logistic Solution at Wings Group Indonesia (PT. Sayap Mas Utama). He is graduated from Universitas Indonesia with 3,91 GPA. While he was a student at Universitas
              Indonesia, he became lecturer assistant in transport phenomena and plant design course. At TORCHE Education, he tutors some subjects including transport phenomena, fluid mechanics, product design, and plant design.`,
					review: '277',
					rating: '4,9 / 5,0',
					schedule: `<iframe style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=134206045/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Process Plant Design, Product Design and Development, Transport Phenomena, Fluid and Particle Mechanics`
				},
				tutor3: {
					name: '',
					link: '',
					photo: ''
				}
			}
		},
		{
			id: 20,
			img: '../assets/img/courses/course-bioreactor.webp',
			subTitle: 'Advanced Process Engineering',
			rating: '  9/10',
			title: `Bioreactor Engineering`,
			desc: `Specialized course in bioprocess engineering that focuses on designing and engineering of bioreactors, with consideration in bacterial behaviours and kinetics.`,
			tutor: {
				tutor1: {
					name: 'Syailendra',
					photo: '../assets/img/trainers/tutors-5.jpg',
					rating: '4,62 / 5,0',
					review: '44',
					about: `Syailendra currently pursuing master degree in chemical engineering at Institut Teknologi Bandung. He obtained his bachelor degree in chemical engineering from Universitas Indonesia and become research assistant there. Previously, he became lecturer assistant in some chemical engineering subjects at Universitas Indonesia, namely numerical computation, chemical engineering modelling, bioreactor engineering, and bioprocess equipment design course.`,
					schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=853803407/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Chemical Engineering Mathematics, Fundamentals of Calculus, Fluid Particle Mechanics, Numerical Computation for Engineers`
				},
				tutor2: {
					name: '',
					link: '',
					photo: ''
				},
				tutor3: {
					name: '',
					link: '',
					photo: ''
				}
			}
		},
		{
			id: 21,
			img: '../assets/img/courses/course-cps.webp',
			subTitle: 'Advanced Process Engineering',
			rating: ' 9,6/10',
			title: `Chemical Process Simulation`,
			desc: `Process simulation course provides hands-on experience in multiple process engineering software, like Aspen HYSYS, Aspen Plus, SuperPro, COMSOL Multiphysics, ANSYS Fluent, etc.`,
			tutor: {
				tutor1: {
					name: 'Ridzki',
					photo: '../assets/img/trainers/tutors-12.jpg',
					rating: '0,0 / 5,0',
					review: '0',
					about: `Process engineer from on of the petrochemical plant in Indonesia. Several times as guest lecturer at STEM Akamigas Cepu.`,
					schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=336568314/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Chemical Process Simulation, Process Plant Design`
				},
				tutor2: {
					name: 'Riswanda',
					photo: '../assets/img/trainers/tutors-14.jpg',
					rating: '4,7 / 5,0',
					review: '3',
					about: `Petrochemical Process Engineer who graduated from Institute Technology of Sepuluh Nopember Surabaya with GPA 3.90 and appreciated as best ITS GPA 2018, has experience as Chemical Engineer tutor since in campus and belong to increase PP Plant capacity project from 480 to 590 KTA`,
					schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=184355625/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Chemical Process Simulation, Process Equipment Design`
				},
				tutor3: {
					name: '',
					link: '',
					photo: ''
				}
			}
		},
		{
			id: 22,
			img: '../assets/img/courses/course-chemath.webp',
			subTitle: 'Advanced Process Engineering',
			rating: ' 8,4/10',
			title: `Chemical Engineering Mathematics`,
			desc: `This course provides topics in chemical engineering mathematics and analysis, that uses methods like ordinary differential equations, series solutions, and partial differential equations.`,
			tutor: {
				tutor1: {
					name: 'Samuel',
					photo: '../assets/img/trainers/tutors-6.jpg',
					rating: '4,6 / 5,0',
					review: '156',
					about: `Samuel is a process engineer and educator graduated from Universitas Indonesia (2019) and Institut Teknologi Bandung (2022) majoring in chemical engineering. As a process engineer, Samuel has handled many projects in oil and gas indsutries and petrochemical industries across Indonesia. Some of them are PT. Pertamina's (Persero) CB-III Pipeline project, BBWM Refrigeration FEED, PT Bukit Asam TBBC at South Sumatera,
              PT Petromine's Biodiesel storage, PT. Medco Energy's Water-Oil separator improvement, etc.<br><br> As an educator, Samuel teaches more than 200 students in chemical engineering and become lecturer assistant since he was studying at Universitas Indonesia. He teaches
              numerous subjects in chemical engineering and specialized in Computer-Aided Chemical Engineering. Samuel skilled in most process engineering softwares, such as Unisim Design, Aspen HYSYS, Aspen Plus, COMSOL Multiphysics, ANSYS, and Schlumberger PIPESIM and Symmetry.`,
					schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=341757435/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Chemical Engineering Mathematics, Chemical Engineering Thermodynamics, Process Equipment Design`
				},
				tutor2: {
					name: 'Syailendra',
					photo: '../assets/img/trainers/tutors-5.jpg',
					rating: '4,62 / 5,0',
					review: '44',
					about: `Syailendra currently pursuing master degree in chemical engineering at Institut Teknologi Bandung. He obtained his bachelor degree in chemical engineering from Universitas Indonesia and become research assistant there. Previously, he became lecturer assistant in some chemical engineering subjects at Universitas Indonesia, namely numerical computation, chemical engineering modelling, bioreactor engineering, and bioprocess equipment design course.`,
					schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=853803407/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Chemical Engineering Mathematics, Fundamentals of Calculus, Fluid Particle Mechanics, Numerical Computation for Engineers`
				},
				tutor3: {
					name: '',
					link: '',
					photo: ''
				}
			}
		},
		{
			id: 23,
			img: '../assets/img/courses/course-processcontrol.webp',
			subTitle: 'Advanced Process Engineering',
			rating: '9,1/10',
			title: `Process Control and Dynamics`,
			desc: `This capstone course provides explanation in process controls fundamentals and methods, including PID algorithm, instrumentation, stability analysis, and dynamics behaviour.`,
			tutor: {
				tutor1: {
					name: 'Sendy',
					photo: '../assets/img/trainers/tutors-4.jpg',
					rating: '4,66 / 5,0',
					review: '203',
					about: `Sendy is a tutor and co-founder at TORCHE Education. He is a PDCA Officer at PT Sayap Mas Utama (Wings Group), managing supply chain in one of the biggest Fast Moving Consumer Goods company in Indonesia. Previously, he is an engineer at ExxonMobil, handling process control in oil and gas indsutry. He teaches process control and mass transfer subjects at TORCHE Education. `,
					schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=129721676/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Fundamentals of Mass Transfer, Process Control and Dynamics`
				},
				tutor2: {
					name: '',
					link: '',
					photo: ''
				},
				tutor3: {
					name: '',
					link: '',
					photo: ''
				}
			}
		},
		{
			id: 24,
			img: '../assets/img/courses/course-organicchem.webp',
			subTitle: 'Basic Engineering',
			rating: ' 8,9/10',
			title: `Organic Chemistry for Engineers`,
			desc: `This course introduces organic chemistry fundamentals and applications for process engineers. The topics includes isomers, stereochemistry, hydrocarbons, etc.`,
			tutor: {
				tutor1: {
					name: 'Yulia',
					photo: '../assets/img/trainers/tutors-17.jpg',
					rating: ' 0,0 / 5,0',
					review: '0',
					about: `Lulusan Kimia ITB tahun 2018 dan Pengajaran Kimia ITB 2022.<br>
              Menjadi asisten praktikum laboratorium kimia dasar ITB (2016-2017)<br> Menjadi asisten praktikum laboratorium kimia organik (ITB) (2018)<br>
              Menjadi pimpinan praktikum laboratorium kimia dasar ITB (2020-2021)<br>
              Guru kimia di SMA Boarding School Motivator Qur'an Ekselensia Indonesia (2021-Now)<br>
              Magang di laboratorium forensik Mabes Polri (2017)<br>`,
					schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=1395972756/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Organic Chemistry for Engineers`
				},
				tutor2: {
					name: 'Arif',
					photo: '../assets/img/trainers/tutors-9.jpg',
					rating: '4,67 / 5,0',
					review: '6',
					about: `I am someone who is pursuing a doctoral study program (S3) in the field of biorefinery. I am the best graduate of UI Parallel Chemistry with a GPA of 3.42 and Master of Chemical Engineering at UI with a GPA of 3.69. Has experience teaching high school chemistry Olympiad and basic chemistry courses such as basic chemistry, organic chemistry and analytical chemistry. Has 10 Scopus indexed publications with 3 Q1 articles and 1 Q2 article. I have a Scopus H Index and a google scholar of 3 and 4 . respectively`,
					schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=20045515/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Fundamentals of Analytical Chemistry, Fundamentals of Chemistry, Organic Chemistry for Engineers`
				},
				tutor3: {
					name: '',
					link: '',
					photo: ''
				}
			}
		},
		{
			id: 25,
			img: '../assets/img/courses/course-drawing.webp',
			subTitle: 'Basic Process Engineering',
			rating: ' 9/10',
			title: `Process Engineering Drawing`,
			desc: `Process flow diagrams and Piping and Instrument Diagram is very fundamentals for process engineers and other engineers. This course will introduce PFD and P&ID using softwares like AutoCad and MS Visio.`,
			tutor: {
				tutor1: {
					name: 'Sharen',
					photo: '../assets/img/trainers/tutors-8.jpg',
					rating: '4,7 / 5,0',
					review: '8',
					about: `Sharen graduated from Universitas Indonesia with bachelor degree in chemical engineering. She teaches Mass & Energy Balances and Engineering Drawing. Her undegraduate thesis was about photocatalysis focusing on antibactetial and self-cleaning coating. During her university years,
              She was an assistant lecturer for Thermal & Mechanics Physics and Mass & Energy Balances and a laboratory assistant for Basics & Organics Chemistry. `,
					schedule: `<iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=1235378485/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Mass and Energy Balance, Process Engineering Drawing`
				},
				tutor2: {
					name: '',
					link: '',
					photo: ''
				},
				tutor3: {
					name: '',
					link: '',
					photo: ''
				}
			}
		},
		{
			id: 26,
			img: '../assets/img/courses/course-wasteutility.webp',
			subTitle: 'Advanced Process Engineering',
			rating: '8,5/10',
			title: `Plant Waste and Utility System`,
			desc: `Utilites and waste are the most common processes in process industries. This course introduces utilities and wastes that most commonly met in process industries.`,
			tutor: {
				tutor1: {
					name: 'Felix',
					photo: '../assets/img/trainers/tutors-1.jpg',
					about: `Felix is currently Head of Section - Logistic Solution at Wings Group Indonesia (PT. Sayap Mas Utama). He is graduated from Universitas Indonesia with 3,91 GPA. While he was a student at Universitas
              Indonesia, he became lecturer assistant in transport phenomena and plant design course. At TORCHE Education, he tutors some subjects including transport phenomena, fluid mechanics, product design, and plant design.`,
					review: '277',
					rating: '4,9 / 5,0',
					schedule: `<iframe style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=134206045/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
					descs: `Process Plant Design, Product Design and Development, Transport Phenomena, Fluid and Particle Mechanics`
				},
				tutor2: {
					name: '',
					link: '',
					photo: ''
				},
				tutor3: {
					name: '',
					link: '',
					photo: ''
				}
			}
		}
	];

	return {
		body: {
			course
		}
	};
}
