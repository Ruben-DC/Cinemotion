import { RawDatas, MediaInfos, Movie, TV } from '~/types';

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

		'movie/intheatres': '/movie/now_playing?language=fr-FR&page=1',
		'movie/popular': '/movie/popular?language=fr-FR&page=1',
		'movie/top': '/movie/top_rated?language=fr-FR&page=1',
		'movie/upcoming': '/movie/upcoming?language=fr-FR&page=1',

		// 'movie/details': '/movie',
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

		let medias: MediaInfos[] = (data.results as (Movie | TV)[]).map(
			(media: Movie | TV) => ({
				id: media.id,
				title: (media as Movie).title || (media as TV).name,
				genre_ids: media.genre_ids,
				overview: media.overview,
				poster_path: media.poster_path,
				backdrop_path: media.backdrop_path,
				vote_average: media.vote_average,
				vote_count: media.vote_count,
				release_date:
					(media as Movie).release_date ||
					(media as TV).first_air_date,
			})
		);

		return medias;
	} else {
		return `${apiRoute} not found`;
	}
});
