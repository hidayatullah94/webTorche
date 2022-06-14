import { tutors } from './oldindex.js';

// @ts-ignore
export async function get({ params }) {
	const paramId = params.id;

	// FIXME return all on calling /api/tutors/all
	// need to do this because of a sveltekit prerender bug
	if (paramId === 'all') {
		return { body: tutors };
	}

	// find tutor with specific id
	const tutor = tutors.find(({ id }) => `${id}` === paramId);

	return {
		body: {
			...tutor // return object directly in body
		}
	};
}
