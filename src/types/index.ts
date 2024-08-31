export interface MoviesState {
	allMovies: Movie[];        
	favoriteMovies: Movie[];  
	apiResponse: ApiResponse | null;
	error: {
		sucesss: boolean | null
		message: string | null,
		code: number | null
	};
}

export interface RootState {
	movies: MoviesState; 
}

export interface Movie {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export interface ApiResponse {
	page: number;
	results: Movie[];
	total_pages: number;
	total_results: number;
}

export interface MovieDetail {
	adult: boolean;
	backdrop_path: string | null;
	belongs_to_collection: Collection | null;
	budget: number;
	genres: Genre[];
	homepage: string | null;
	id: number;
	imdb_id: string | null;
	origin_country: string[];
	original_language: string;
	original_title: string;
	overview: string | null;
	popularity: number;
	poster_path: string | null;
	production_companies: ProductionCompany[];
	production_countries: ProductionCountry[];
	release_date: string;
	revenue: number;
	runtime: number | null;
	spoken_languages: SpokenLanguage[];
	status: string;
	tagline: string | null;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}
  
export interface Collection {
	id: number;
	name: string;
	poster_path: string | null;
	backdrop_path: string | null;
}

export interface Genre {
	id: number;
	name: string;
}

export interface ProductionCompany {
	id: number;
	logo_path: string | null;
	name: string;
	origin_country: string;
}

export interface ProductionCountry {
	iso_3166_1: string;
	name: string;
}

export interface SpokenLanguage {
	english_name: string;
	iso_639_1: string;
	name: string;
}
  