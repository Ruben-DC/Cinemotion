import { RawDatas, Movie, TV } from '~/types';
import { formatMedias } from '~/utils/format';
import { fetchWithAuth } from '~/utils/fetch';

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig(event);
	const baseUrl = 'https://api.themoviedb.org/3';

	const getRandomMediaType = () => {
		const randomNumber = () => Math.floor(Math.random() * 2);

		if (randomNumber() === 0) {
			return 'movie';
		} else {
			return 'tv';
		}
	};

	const mediaType = getRandomMediaType();

	const data: RawDatas = await fetchWithAuth(
		`${baseUrl}/${mediaType}/popular?language=fr-FR&page=1`,
		config.tmdbApiKey
	);

	const getRandomIndex = (max: number) => Math.floor(Math.random() * max);

	let randomMedia: Movie | TV = (data.results as Movie[] | TV[])[
		getRandomIndex(data.results.length)
	];

	const discover = formatMedias(randomMedia);
	discover.mediaType = mediaType;

	return discover;
});
