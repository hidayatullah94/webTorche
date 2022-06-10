import adapter from '@sveltejs/adapter-static';
import { resolve } from 'path';

const dev = 'production' === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		}),
		paths: {
			base: dev ? '"' : 'https://github.com/hidayatullah94/webTorche.git'
		},
		target: '#svelte',
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
