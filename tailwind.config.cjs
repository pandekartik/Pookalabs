/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-bg': "url('/assets/bg/hero-bg.png')",
			  }
		},
	},
	plugins: [],
}
