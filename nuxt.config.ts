// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	routeRules: {
		// '/': { prerender: true },
		'/api/tmdb/discover': { cache: { maxAge: 60 * 60 } },
		// '/api/tmdb/movie': { cache: { maxAge: 60 * 60 } },
		// '/api/tmdb/tv': { cache: { maxAge: 60 * 60 } },
	},

	runtimeConfig: {
		tmdbApiKey: process.env.TMDB_API_KEY,

		public: {
			baseUrl: process.env.BASE_URL,
			imageBaseUrl: process.env.IMAGE_BASE_URL,
		},
	},

	devtools: { enabled: false },

	app: {
		head: {
			link: [{ rel: 'icon', type: 'image/png', href: '/popcorn.png' }],
			title: 'Cinemotion',
		},
	},

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
					api: 'modern-compiler'
				},
			},
		},
	},

	css: ['@/assets/styles/index.scss'],
	
	nitro: {
    		externals: {
      			inline: ['@unhead/vue']
    		}
  	}
});
