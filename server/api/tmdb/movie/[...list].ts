import { RawDatas, Movie } from '~/types';
import { formatMediasArray } from '~/utils/format';
import { fetchWithAuth } from '~/utils/fetch';

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig(event);
	const params = event.context.params?.list ?? '';
	const moviesListUrl = `${config.public.baseUrl}/movie`;
	const list = params?.split('/')[1];

	type RouteKey = keyof typeof routes;

	const routes = {
		intheatres: '/now_playing?language=fr-FR&page=1',
		popular: '/popular?language=fr-FR&page=1',
		top: '/top_rated?language=fr-FR&page=1',
		upcoming: '/upcoming?language=fr-FR&page=1',
	};

	const data: RawDatas = await fetchWithAuth(
		`${moviesListUrl}/${routes[list as RouteKey]}`,
		config.tmdbApiKey
	);

	return formatMediasArray(data.results as Movie[]);
});
