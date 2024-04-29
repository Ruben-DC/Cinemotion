// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
