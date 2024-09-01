import { MutationTree } from 'vuex';
import { MoviesState, Movie, MovieDetails } from  '@/types';

export const mutations: MutationTree<MoviesState> = {
  setMovies(state, movies: Movie[]) {
    state.allMovies = movies;
  },
  addFavoriteMovie(state, movieId) {
    const movie = state.allMovies.find(movie => movie.id === movieId);
    if (movie && !state.favoriteMovies.some(favorite => favorite.id === movie.id)) {
      state.favoriteMovies.push(movie);
    }
  },
  removeFavoriteMovies(state) {
    state.favoriteMovies = [];
  },
  setError(state: MoviesState, error: { success: boolean, message: string, code: number }) {
    state.error = error;
  },
  setTotalPages(state, pages: number) {
    state.totalPages = pages;
  },
  setTotalResults(state, results: number) {
    state.totalResults = results;
  },
  setSelectedMovie(state, movie: MovieDetails) {
    state.selectedMovie = movie;
  },
  
};
