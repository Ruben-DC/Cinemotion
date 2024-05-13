import { TvDetails } from '~/types';
import { fetchWithAuth } from '~/utils/fetch';

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig(event);
	const id = event.context.params?.id;
	const baseUrl = `${config.public.baseUrl}/tv`;

	const data: TvDetails = await fetchWithAuth(
		`${baseUrl}/${id}?language=fr-FR`,
		config.tmdbApiKey
	);

	return data;
});
