import type { Movie, TV, MediaInfos } from '~/types';

const formatMedias = (data: Movie | TV): MediaInfos => {
	return {
		id: data.id,
		title: (data as Movie).title || (data as TV).name,
		genre_ids: data.genre_ids,
		overview: data.overview,
		poster_path: data.poster_path,
		backdrop_path: data.backdrop_path,
		vote_average: data.vote_average,
		vote_count: data.vote_count,
		release_date:
			(data as Movie).release_date || (data as TV).first_air_date,
	};
};

const formatMediasArray = (data: (TV | Movie)[]): MediaInfos[] => {
	return data.map((media: Movie | TV) => formatMedias(media));
};

export { formatMedias, formatMediasArray };
