import { RawDatas, Movie, MediaInfos } from '~/types';
import { formatMediasArray } from '~/utils/format';
import { fetchWithAuth } from '~/utils/fetch';

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig(event);
	const params = event.context.params?.list ?? '';
	const moviesListUrl = `${config.public.baseUrl}/movie`;
	const list = params?.split('/')[1];
	const id = params?.split('/')[2] ? params.split('/')[2] : '';
	const query = getQuery(event);

	type RouteKey = keyof typeof routes;

	const routes = {
		intheatres: '/now_playing?language=fr-FR',
		popular: '/popular?language=fr-FR',
		top: '/top_rated?language=fr-FR',
		upcoming: '/upcoming?language=fr-FR',
		reco: '/recommendations?language=fr-FR&page=1',
		similar: '/similar?language=fr-FR&page=1',
	};

	const data: RawDatas = await fetchWithAuth(
		`${moviesListUrl}/${id ? id + '/' : ''}${routes[list as RouteKey]}${
			query.page ? `&page=${query.page}` : '&page=1'
		}`,
		config.tmdbApiKey
	);

	// const formattedDatas = formatMediasArray(data.results as Movie[]);

	// return formattedDatas as MediaInfos[];
	return data as RawDatas;
});
