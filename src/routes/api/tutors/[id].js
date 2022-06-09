import { tutors } from './index.js';

// @ts-ignore
export async function get({ params }) {
	const paramId = params.id;

	// find tutor with specific id
	const tutor = tutors.find(({ id }) => `${id}` === paramId);

	return {
		body: {
			...tutor // return object directly in body
		}
	};
}
