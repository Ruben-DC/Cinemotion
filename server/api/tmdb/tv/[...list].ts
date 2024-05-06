import { RawDatas, TV } from '~/types';
import { formatMediasArray } from '~/utils/format';
import { fetchWithAuth } from '~/utils/fetch';

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig(event);
	const params = event.context.params?.list ?? '';
	const tvsListUrl = `${config.public.baseUrl}/tv`;
	const list = params?.split('/')[1];

	type RouteKey = keyof typeof routes;

	const routes = {
		airing: '/airing_today?language=fr-FR&page=1',
		popular: '/popular?language=fr-FR&page=1',
		top: '/top_rated?language=fr-FR&page=1',
		ontheair: '/on_the_air?language=fr-FR&page=1',
	};

	const data: RawDatas = await fetchWithAuth(
		`${tvsListUrl}/${routes[list as RouteKey]}`,
		config.tmdbApiKey
	);

	return formatMediasArray(data.results as TV[]);
});
