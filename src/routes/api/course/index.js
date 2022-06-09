export async function get() {
	return {
		body: [...course]
	};
}

const course = [
	{
		id: 1,
		img: '../assets/img/courses/course-calculus.webp',
		subTitle: 'Basic Engineering',
		rating: '9/10',
		title: 'Fundamentals of Calculus',
		desc: 'This course provides student with mathematical knowledge and analytical skills so that they are able to apply techniques of calculus to solve scientific and engineering problems.',
		tutor: [
			{
				id: 5,
				name: 'Syailendra',
				photo: '../assets/img/trainers/tutors-5.jpg'
			},
			{
				id: 0,
				name: '',
				photo: ''
			},
			{
				id: 0,
				name: '',
				photo: ''
			}
		]
	},

	{
		id: 2,
		img: '../assets/img/courses/course-physics1.webp',
		subTitle: 'Basic Engineering',
		rating: '8,7/10',
		title: 'Fundamentals of Physics - Mechanics & Heat',
		desc: `This course provides introduction to basic physics for engineers and knowledge and problems in newton's law of motion and conservation of energy.`,
		tutor: [
			{
				id: 18,
				name: 'Yevonnael',
				photo: '../assets/img/trainers/tutors-18.jpg',
				rating: ' 0,0 / 5,0',
				review: '0',
				about: ``,
				schedule: ` <iframe  style="width: 100%;" height="950px" src="https://docs.google.com/spreadsheets/d/1vI27aRhAQnTB4uuFZiZuJzXRd_3NkjvWwgaaraijGB0/edit#gid=232143025/pubhtml?widget=true&amp;headers=false" frameborder="0"></iframe>`,
				descs: `Fundamentals of Physics, Numerical Computation for Engineers, Statistics & Probability`
			},
			{ idt: 0, name: '', photo: '' },
			{
				id: 0,
				name: '',
				photo: ''
			}
		]
	},

	{
		id: 3,
		img: '../assets/img/courses/course-physics2.webp',
		subTitle: 'Basic Engineering',
		rating: '0/10',
		title: `Fundamentals of Physics - Magnets, Electrics, Waves, Optics`,
		desc: `This course provides basic physics for engineers in magnets, electrics, waves, and optics problems. Subjects including modern physics, electromagnets, and light will be covered.`,
		tutor: [
			{
				id: 18,
				name: 'Yevonnael',
				photo: '../assets/img/trainers/tutors-18.jpg'
			},
			{
				id: 0,
				name: '',
				photo: ''
			},
			{
				id: 0,
				name: '',
				photo: ''
			}
		]
	},
	{
		id: 4,
		img: '../assets/img/courses/course-chemistry.webp',
		subTitle: 'Basic Engineering',
		rating: '8/10',
		title: `Fundamentals of Chemistry`,
		desc: `This course will provide basics and fundamentals of chemistry to solve common problems in engineering. The course covers subjects in chemical reaction, thermochemistry, chemical equilibrium, electrochemistry, and kinetics.`,
		tutor: [
			{
				id: 21,
				name: 'Ajeng',
				photo: '../assets/img/trainers/tutors-21.jpg'
			},
			{
				id: 20,
				name: 'Adam',
				photo: '../assets/img/trainers/tutors-20.jpg'
			},
			{
				id: 16,
				name: 'Hani',
				photo: '../assets/img/trainers/tutors-16.jpg'
			}
		]
	},

	{
		id: 5,
		img: '../assets/img/courses/course-statistics.webp',
		subTitle: 'Basic Engineering',
		rating: '8/10',
		title: `Statistics and Probability`,
		desc: `Statistics and probability course will introduce basics in statistics for engineers, statistics tests, and probability to solve common problems in engineering and daily life.`,
		tutor: [
			{
				id: 21,
				name: 'Yevonnael',
				photo: '../assets/img/trainers/tutors-18.jpg'
			},
			{
				id: 0,
				name: '',
				photo: ''
			},
			{
				id: 0,
				name: '',
				photo: ''
			}
		]
	},
	{
		id: 6,
		img: '../assets/img/courses/course-engeco.webp',
		subTitle: 'Basic Engineering',
		rating: '9,6/10',
		title: `Engineering Economy`,
		desc: `The engineering economy course covers subjects including time value of money, ROR, cost analysis, project financing, and sensitivty analysis. The course also provides real-life problems including industry-related economy problems.`,
		tutor: [
			{
				id: 3,
				name: 'Arya',
				photo: '../assets/img/trainers/tutors-3.jpg'
			},
			{
				id: 0,
				name: '',
				photo: ''
			},
			{
				id: 0,
				name: '',
				photo: ''
			}
		]
	},
	{
		id: 7,
		img: '../assets/img/courses/course-achem.webp',
		subTitle: 'Basic Process Engineering',
		rating: '9/10',
		title: `Fundamentals of Analytical Chemistry`,
		desc: `This course covers basics and fundamentals of analytical and instrumental chemistry, including gravimetry, titrations, electrochemical, potentiometry, specstroscopy, and chromatography.`,
		tutor: [
			{
				id: 16,
				name: 'Hani',
				photo: '../assets/img/trainers/tutors-16.jpg'
			},
			{
				id: 9,
				name: 'Arif',
				photo: '../assets/img/trainers/tutors-9.jpg'
			},
			{
				id: 20,
				name: 'Adam',
				photo: '../assets/img/trainers/tutors-20.jpg'
			}
		]
	},
	{
		id: 8,
		img: '../assets/img/courses/course-cellcult.webp',
		subTitle: 'Basic Process Engineering',
		rating: '9,8/10',
		title: `Cell Culture for Engineers`,
		desc: `Cell culture course is a specialization course for bioprocess engineers, that covers subjects in tissue culture, animal culture, and bioprocess cell culture.`,
		tutor: [
			{
				id: 7,
				name: 'Amalia',
				photo: '../assets/img/trainers/tutors-7.jpg'
			},
			{
				id: 0,
				name: '',
				photo: ''
			},
			{
				id: 0,
				name: '',
				photo: ''
			}
		]
	},
	{
		id: 9,
		img: '../assets/img/courses/course-chetermo.webp',
		subTitle: 'Basic Process Engineering',
		rating: '8,9/10',
		title: `Chemical Engineering Thermodynamics`,
		desc: `This course covers subjects in basic thermodynamics, ideal and non-ideal properties, process cycle, vapor-liquid equilibrium, and chemical equilibirium reaction.`,
		tutor: [
			{
				id: 15,
				name: 'Shafira',
				photo: '../assets/img/trainers/tutors-15.jpg'
			},
			{
				id: 10,
				name: 'Syahdan',
				photo: '../assets/img/trainers/tutors-10.jpg'
			},
			{
				id: 6,
				name: 'Samuel',
				photo: '../assets/img/trainers/tutors-6.jpg'
			}
		]
	},
	{
		id: 10,
		img: '../assets/img/courses/course-chereaction.webp',
		subTitle: 'Basic Process Engineering',
		rating: '9,2/10',
		title: `Chemical Reaction Engineering`,
		desc: `This course covers chemical reaction kinetics and mechanism, diffusion, multiple reactions, reactors and sizing, steady-state and unsteady-state operations, and non-isothermal reactors`,
		tutor: [
			{
				id: 13,
				name: 'Nadia',
				photo: '../assets/img/trainers/tutors-13.jpg'
			},
			{
				id: 10,
				name: 'Syahdan',
				photo: '../assets/img/trainers/tutors-10.jpg'
			},
			{
				id: 2,
				name: 'Leon',
				photo: '../assets/img/trainers/tutors-2.jpg'
			}
		]
	},
	{
		id: 11,
		img: '../assets/img/courses/course-fluidmech.webp',
		subTitle: 'Basic Process Engineering',
		rating: '9,6/10',
		title: `Fluid & Particles Mechanics`,
		desc: `Subjects covered in this course are properties of fluid, compressible and incompressible fluid, flow equipments (pumps, blowers, compressors), boundary layer, fluidized and fixed bed, and motion of particle.`,
		tutor: [
			{
				id: 1,
				name: 'Felix',
				photo: '../assets/img/trainers/tutors-1.jpg'
			},
			{
				id: 5,
				name: 'Syailendra',
				photo: '../assets/img/trainers/tutors-5.jpg'
			},
			{
				id: 10,
				name: 'Syahdan',
				photo: '../assets/img/trainers/tutors-10.jpg'
			}
		]
	},
	{
		id: 12,
		img: '../assets/img/courses/course-heattrans.webp',
		subTitle: 'Basic Process Engineering',
		rating: '8,7/10',
		title: `Fundamentals of Heat Transfer`,
		desc: `This course provides basic heat transfer principles: conduction, convection, and radiation, with some application in process engineering, including heat exchanger.`,
		tutor: [
			{
				id: 7,
				name: 'Amalia',
				photo: '../assets/img/trainers/tutors-7.jpg'
			},
			{
				id: 10,
				name: 'Syahdan',
				photo: '../assets/img/trainers/tutors-10.jpg'
			},
			{
				id: 0,
				name: '',
				photo: ''
			}
		]
	},
	{
		id: 13,
		img: '../assets/img/courses/course-massenergy.webp',
		subTitle: 'Basic Process Engineering',
		rating: '9,4/10',
		title: `Mass and Energy Balances`,
		desc: `This basic course for process engineers discuss mass balance, energy balance, reactions, separations, and processes that commonly faced by process engineers.`,
		tutor: [
			{
				id: 8,
				name: 'Sharen',
				photo: '../assets/img/trainers/tutors-8.jpg'
			},
			{
				id: 13,
				name: 'Nadia',
				photo: '../assets/img/trainers/tutors-13.jpg'
			},
			{
				id: 15,
				name: 'Shafira',
				photo: '../assets/img/trainers/tutors-15.jpg'
			}
		]
	},
	{
		id: 14,
		img: '../assets/img/courses/course-masstrans.webp',
		subTitle: 'Basic Process Engineering',
		rating: '8,4/10',
		title: `Fundamentals of Mass Transfer`,
		desc: `Mass transfer course discuss topics in diffusion, multicomponent distillation, absorption and stripping, extraction, drying, adsorption, and membrane separations.`,
		tutor: [
			{
				id: 19,
				name: 'Hendri',
				photo: '../assets/img/trainers/tutors-19.jpg'
			},
			{
				id: 4,
				name: 'Sendy',
				photo: '../assets/img/trainers/tutors-4.jpg'
			},
			{
				id: 0,
				name: '',
				photo: ''
			}
		]
	},
	{
		id: 15,
		img: '../assets/img/courses/course-numcom.webp',
		subTitle: 'Basic Process Engineering',
		rating: '8,7/10',
		title: `Numerical Computation for Engineers`,
		desc: `This course provides various topics in numerical computations and methods, including linear-nonlinear equations, numerical integration-differentiation, and ordinary-partial differential equations.`,
		tutor: [
			{
				id: 15,
				name: 'Shafira',
				photo: '../assets/img/trainers/tutors-15.jpg'
			},
			{
				id: 18,
				name: 'Yevonnael',
				photo: '../assets/img/trainers/tutors-18.jpg'
			},
			{
				id: 0,
				name: '',
				photo: ''
			}
		]
	},
	{
		id: 16,
		img: '../assets/img/courses/course-transportphen.webp',
		subTitle: 'Basic Process Engineering',
		rating: '9,3/10',
		title: `Transport Phenomena`,
		desc: `Transport phenomena course explains macro and micro balances phenomena that occurs in common until specific process engineering problems. The analysis is based on shell balances in a system.`,
		tutor: [
			{
				id: 10,
				name: 'Syahdan',
				photo: '../assets/img/trainers/tutors-10.jpg'
			},
			{
				id: 1,
				name: 'Felix',
				photo: '../assets/img/trainers/tutors-1.jpg'
			},
			{
				id: 0,
				name: '',
				photo: ''
			}
		]
	},
	{
		id: 17,
		img: '../assets/img/courses/course-cheq.webp',
		subTitle: 'Advanced Process Engineering',
		rating: '8,8/10',
		title: `Process Equipment Design`,
		desc: `This course provides explanation in heuristics when conducting design in process equipment, from pipe, flow equipments, separation equipments, heat exchangers, etc.`,
		tutor: [
			{
				id: 14,
				name: 'Riswanda',
				photo: '../assets/img/trainers/tutors-14.jpg'
			},
			{
				id: 6,
				name: 'Samuel',
				photo: '../assets/img/trainers/tutors-6.jpg'
			},
			{
				id: 0,
				name: '',
				photo: ''
			}
		]
	},
	{
		id: 18,
		img: '../assets/img/courses/course-plantdesign.webp',
		subTitle: 'Advanced Process Engineering',
		rating: '9,2/10',
		title: `Process Plant Design`,
		desc: `As a capstone process engineering course, plant design includes topics in process synthesis, equipment design, heat exchanger network, process safety, and economical analysis of the plant.`,
		tutor: [
			{
				id: 12,
				name: 'Ridzki',
				photo: '../assets/img/trainers/tutors-12.jpg'
			},
			{
				id: 1,
				name: 'Felix',
				photo: '../assets/img/trainers/tutors-1.jpg'
			},
			{
				id: 0,
				name: '',
				photo: ''
			}
		]
	},
	{
		id: 19,
		img: '../assets/img/courses/course-product.webp',
		subTitle: 'Advanced Process Engineering',
		rating: ' 8,9/10',
		title: `Product Design and Development`,
		desc: `This capstone course provides topics in chemical and biological product design, and discuss topics including product manufacture, supply chain, and economic analysis.`,
		tutor: [
			{
				id: 3,
				name: 'Arya',
				photo: '../assets/img/trainers/tutors-3.jpg'
			},
			{
				id: 1,
				name: 'Felix',
				photo: '../assets/img/trainers/tutors-1.jpg'
			},
			{
				id: 0,
				name: '',
				photo: ''
			}
		]
	},
	{
		id: 20,
		img: '../assets/img/courses/course-bioreactor.webp',
		subTitle: 'Advanced Process Engineering',
		rating: '  9/10',
		title: `Bioreactor Engineering`,
		desc: `Specialized course in bioprocess engineering that focuses on designing and engineering of bioreactors, with consideration in bacterial behaviours and kinetics.`,
		tutor: [
			{
				id: 5,
				name: 'Syailendra',
				photo: '../assets/img/trainers/tutors-5.jpg'
			},
			{
				id: 0,
				name: '',
				photo: ''
			},
			{
				id: 0,
				name: '',
				photo: ''
			}
		]
	},
	{
		id: 21,
		img: '../assets/img/courses/course-cps.webp',
		subTitle: 'Advanced Process Engineering',
		rating: ' 9,6/10',
		title: `Chemical Process Simulation`,
		desc: `Process simulation course provides hands-on experience in multiple process engineering software, like Aspen HYSYS, Aspen Plus, SuperPro, COMSOL Multiphysics, ANSYS Fluent, etc.`,
		tutor: [
			{
				id: 12,
				name: 'Ridzki',
				photo: '../assets/img/trainers/tutors-12.jpg'
			},
			{
				id: 14,
				name: 'Riswanda',
				photo: '../assets/img/trainers/tutors-14.jpg'
			},
			{
				id: 0,
				name: '',
				photo: ''
			}
		]
	},
	{
		id: 22,
		img: '../assets/img/courses/course-chemath.webp',
		subTitle: 'Advanced Process Engineering',
		rating: ' 8,4/10',
		title: `Chemical Engineering Mathematics`,
		desc: `This course provides topics in chemical engineering mathematics and analysis, that uses methods like ordinary differential equations, series solutions, and partial differential equations.`,
		tutor: [
			{
				id: 6,
				name: 'Samuel',
				photo: '../assets/img/trainers/tutors-6.jpg'
			},
			{
				id: 5,
				name: 'Syailendra',
				photo: '../assets/img/trainers/tutors-5.jpg'
			},
			{
				id: 0,
				name: '',
				photo: ''
			}
		]
	},
	{
		id: 23,
		img: '../assets/img/courses/course-processcontrol.webp',
		subTitle: 'Advanced Process Engineering',
		rating: '9,1/10',
		title: `Process Control and Dynamics`,
		desc: `This capstone course provides explanation in process controls fundamentals and methods, including PID algorithm, instrumentation, stability analysis, and dynamics behaviour.`,
		tutor: [
			{
				id: 4,
				name: 'Sendy',
				photo: '../assets/img/trainers/tutors-4.jpg'
			},
			{
				id: 0,
				name: '',
				photo: ''
			},
			{
				id: 0,
				name: '',
				photo: ''
			}
		]
	},
	{
		id: 24,
		img: '../assets/img/courses/course-organicchem.webp',
		subTitle: 'Basic Engineering',
		rating: ' 8,9/10',
		title: `Organic Chemistry for Engineers`,
		desc: `This course introduces organic chemistry fundamentals and applications for process engineers. The topics includes isomers, stereochemistry, hydrocarbons, etc.`,
		tutor: [
			{
				id: 17,
				name: 'Yulia',
				photo: '../assets/img/trainers/tutors-17.jpg'
			},
			{
				id: 9,
				name: 'Arif',
				photo: '../assets/img/trainers/tutors-9.jpg'
			},
			{
				id: 0,
				name: '',
				photo: ''
			}
		]
	},
	{
		id: 25,
		img: '../assets/img/courses/course-drawing.webp',
		subTitle: 'Basic Process Engineering',
		rating: ' 9/10',
		title: `Process Engineering Drawing`,
		desc: `Process flow diagrams and Piping and Instrument Diagram is very fundamentals for process engineers and other engineers. This course will introduce PFD and P&ID using softwares like AutoCad and MS Visio.`,
		tutor: [
			{
				id: 8,
				name: 'Sharen',
				photo: '../assets/img/trainers/tutors-8.jpg'
			},
			{
				id: 0,
				name: '',
				photo: ''
			},
			{
				id: 0,
				name: '',
				photo: ''
			}
		]
	},
	{
		id: 26,
		img: '../assets/img/courses/course-wasteutility.webp',
		subTitle: 'Advanced Process Engineering',
		rating: '8,5/10',
		title: `Plant Waste and Utility System`,
		desc: `Utilites and waste are the most common processes in process industries. This course introduces utilities and wastes that most commonly met in process industries.`,
		tutor: [
			{
				id: 1,
				name: 'Felix',
				photo: '../assets/img/trainers/tutors-1.jpg'
			},
			{
				id: 0,
				name: '',
				photo: ''
			},
			{
				id: 0,
				name: '',
				photo: ''
			}
		]
	}
];
