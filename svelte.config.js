import adapter from '@sveltejs/adapter-auto';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					'@': resolve('./src')
				}
			}
		}
	}
};

export default config;
