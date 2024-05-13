import { RawDatas } from '~/types';
import { fetchWithAuth } from '~/utils/fetch';

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig(event);
	const params = event.context.params?.category ?? '';
	const searchUrl = `${config.public.baseUrl}/search`;
	const category = params?.split('/')[0];
	const query = getQuery(event);

	console.log(params, category, query.query);

	type RouteKey = keyof typeof routes;

	const routes = {
		tv: '/tv?include_adult=false&language=fr-FR&page=1',
		movie: '/movie?include_adult=false&language=fr-FR&page=1',
	};

	const data: RawDatas = await fetchWithAuth(
		`${searchUrl}/${
			routes[category as RouteKey]
		}${`&query=${query.query}`}`,
		config.tmdbApiKey
	);

	return data as RawDatas;
});
