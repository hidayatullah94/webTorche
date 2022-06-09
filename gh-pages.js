import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/hidayatullah94/webTorche.git', // Update to point to your repository
		user: {
			name: 'hidayatullah', // update to use your name
			email: 'hidayatullah1780@gmail.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
