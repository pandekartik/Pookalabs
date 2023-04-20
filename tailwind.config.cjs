/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-bg': "url('/assets/bg/hero-bg.png')",
				'project-bg': "url('/assets/bg/projects-bg.png')",
				'dark-bg': "url('/assets/bg/bg-2.png')"
			  }
		},
	},
	plugins: [],
}
