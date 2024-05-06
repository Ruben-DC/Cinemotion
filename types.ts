export type MediaType = 'movie' | 'tv';

export type RawDatas = {
	page: number;
	results: Movie[] | TV[];
	total_pages: number;
	total_results: number;
};

export type DetailsRawDatas = {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: {
		id: number;
		name: string;
		poster_path: string;
		backdrop_path: string;
	};
	budget: number;
	// genres: [
	// {
	// 	"id": 27,
	// 	"name": "Horror"
	//   },
	//   {
	// 	"id": 53,
	// 	"name": "Thriller"
	//   }
	// ];
	homepage: string;
	id: number;
	imdb_id: string;
	origin_country: string[];
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	// production_companies: [
	// 	{
	// 		id: 143049;
	// 		logo_path: null;
	// 		name: 'Halloween VI Productions';
	// 		origin_country: '';
	// 	},
	// 	{
	// 		id: 21438;
	// 		logo_path: null;
	// 		name: 'Nightfall Productions';
	// 		origin_country: '';
	// 	},
	// 	{
	// 		id: 15822;
	// 		logo_path: '/Aodu1OPI0LHTWYr7Jlm4R2XY2og.png';
	// 		name: 'Trancas International Films';
	// 		origin_country: 'US';
	// 	},
	// 	{
	// 		id: 7405;
	// 		logo_path: '/rfnws0uY8rsNAsrLbx3gEIcYXx3.png';
	// 		name: 'Dimension Films';
	// 		origin_country: 'US';
	// 	}
	// ];
	// production_countries: [
	// 	{
	// 		iso_3166_1: 'US';
	// 		name: 'United States of America';
	// 	}
	// ];
	release_date: string;
	revenue: number;
	runtime: number;
	// spoken_languages: [
	// 	{
	// 		english_name: 'English';
	// 		iso_639_1: 'en';
	// 		name: 'English';
	// 	}
	// ];
	status: string;
	tagline: string;
	title: string;
	video: false;
	vote_average: number;
	vote_count: number;
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

	mediaType?: 'tv' | 'movie';
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
