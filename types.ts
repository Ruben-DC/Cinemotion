export type MediaType = 'movie' | 'tv';

export type RawDatas = {
	page: number;
	results: object[];
	total_pages: number;
	total_results: number;
};

export type MediaInfos = {
	id: number;
	title: string;
	genre_ids: number[];
	overview: string;

	poster_path: string;
	backdrop_path: string;

	vote_average?: number;
	vote_count?: number;

	release_date: string;
	runtime?: number;
	count_of_seasons?: number;
};

export type Movie = {
	id: number;
	title: string;
	genre_ids: number[];
	overview: string;

	poster_path: string;
	backdrop_path: string;

	vote_average: number;
	vote_count: number;

	release_date: string;
};

export type TV = {
	id: number;
	name: string;
	genre_ids: number[];
	overview: string;

	poster_path: string;
	backdrop_path: string;

	vote_average: number;
	vote_count: number;

	first_air_date: string;
};
