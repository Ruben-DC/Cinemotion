import type { DetailsRawDatas, Movie, RawDatas, TV } from '~/types';

const fetchWithAuth = async (apiUrl: string, apiKey: string) => {
	const data: DetailsRawDatas | Movie | RawDatas | TV = await $fetch(apiUrl, {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${apiKey}`,
		},
	});

	return data as RawDatas;
};

export { fetchWithAuth };
