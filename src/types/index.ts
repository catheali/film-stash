export interface MoviesState {
	allMovies: Movie[];        
	favoriteMovies: Movie[];  
	error: {
		success: boolean | null
		message: string | null,
		code: number | null
	};
	totalPages: number;
	totalResults: number;
	selectedMovie: MovieDetails | null; 
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

export interface Genre {
	id: number;
	name: string;
  }
  
export interface MovieDetails {
	id: number,
	title: string; 
	poster_path: string; 
	overview: string; 
	genres: Genre[]; 
	release_date: string; 
	revenue: number; 
}
  