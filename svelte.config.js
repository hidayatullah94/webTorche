import adapter_static from '@sveltejs/adapter-static';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter_static(),
		vite: {
			resolve: {
				alias: {
					'@': resolve('./src')
				}
			}
		},
		prerender: { default: true }
	}
};

export default config;
