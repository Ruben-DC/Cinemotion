// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	// routeRules: {
	// 	// Generated at build time for SEO purpose
	// 	'/': { prerender: true },
	// 	// Cached for 1 hour
	// 	'/api/*': { cache: { maxAge: 60 * 60 } },
	// },

	runtimeConfig: {
		tmdbApiKey: process.env.TMDB_API_KEY,
	},

	devtools: { enabled: true },
	modules: [
		'@nuxt/image',
		'@vueuse/nuxt',
		'nuxt-icon',
		'@nuxtjs/google-fonts',
	],

	image: {
		format: ['webp'],
	},

	googleFonts: {
		families: {
			Lato: [400],
			'Playfair Display': '400..700',
		},
	},

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "~/assets/styles/_colors.scss" as *;',
				},
			},
		},
	},

	css: ['@/assets/styles/index.scss'],
});
