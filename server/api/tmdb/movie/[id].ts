import { DetailsRawDatas } from '~/types';
import { fetchWithAuth } from '~/utils/fetch';

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig(event);
	const id = event.context.params?.id;
	const baseUrl = `${config.public.baseUrl}/movie`;

	const data: DetailsRawDatas = await fetchWithAuth(
		`${baseUrl}/${id}`,
		config.tmdbApiKey
	);

	return data;
});
