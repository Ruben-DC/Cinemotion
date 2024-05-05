import { RawDatas, Movie, TV } from '~/types';
import { formatMedias, formatMediasArray } from '~/utils/format';

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig(event);
	const apiRoute: string = event.context.params?.media ?? '';
	const baseUrl = 'https://api.themoviedb.org/3';

	type RouteKey = keyof typeof routes;

	const routes = {
		'tv/airing': '/tv/airing_today?language=fr-FR&page=1',
		'tv/popular': '/tv/popular?language=fr-FR&page=1',
		'tv/top': '/tv/top_rated?language=fr-FR&page=1',
		'tv/ontheair': '/tv/on_the_air?language=fr-FR&page=1',
		// 'tv/details': '/tv';
		// 'tv/discover': '/discover/tv',

		'movie/intheatres': '/movie/now_playing?language=fr-FR&page=1',
		'movie/popular': '/movie/popular?language=fr-FR&page=1',
		'movie/top': '/movie/top_rated?language=fr-FR&page=1',
		'movie/upcoming': '/movie/upcoming?language=fr-FR&page=1',
		// 'movie/details': '/movie',
		'movie/discover':
			'/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=1&sort_by=popularity.desc',
	};

	if (apiRoute in routes) {
		const data: RawDatas = await $fetch(
			baseUrl + routes[apiRoute as RouteKey],
			{
				method: 'GET',
				headers: {
					accept: 'application/json',
					Authorization: `Bearer ${config.tmdbApiKey}`,
				},
			}
		);

		if ((apiRoute as RouteKey) == 'movie/discover') {
			const getRandomIndex = (max: number) =>
				Math.floor(Math.random() * max);

			let discover: Movie = (data.results as Movie[])[
				getRandomIndex(data.results.length)
			];

			return formatMedias(discover);
		} else {
			return formatMediasArray(data.results as (Movie | TV)[]);
		}
	} else {
		return `${apiRoute} not found`;
	}
});
