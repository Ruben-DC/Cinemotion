import { RawDatas, TV } from '~/types';
import { fetchWithAuth } from '~/utils/fetch';
import { formatMediasArray } from '~/utils/format';

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig(event);
	const params = event.context.params?.list ?? '';
	const TvListUrl = `${config.public.baseUrl}/tv`;
	const list = params?.split('/')[1];
	const id = params?.split('/')[2] ? params.split('/')[2] : '';
	const query = getQuery(event);

	type RouteKey = keyof typeof routes;

	const routes = {
		airing: '/airing_today?language=fr-FR',
		popular: '/popular?language=fr-FR',
		top: '/top_rated?language=fr-FR',
		ontheair: '/on_the_air?language=fr-FR',
		reco: '/recommendations?language=fr-FR&page=1',
		similar: '/similar?language=fr-FR&page=1',
	};

	const data: RawDatas = await fetchWithAuth(
		`${TvListUrl}/${id ? id + '/' : ''}${routes[list as RouteKey]}${
			query.page ? `&page=${query.page}` : '&page=1'
		}`,
		config.tmdbApiKey
	);

	data.mediaType = 'tvs';

	return formatMediasArray(data.results as TV[]);
});
