import { MutationTree } from 'vuex';
import { MoviesState, Movie, ApiResponse } from  '@/types';

export const mutations: MutationTree<MoviesState> = {
  setMovies(state, movies: Movie[]) {
    state.allMovies = movies;
  },
  addFavoriteMovie(state, movie: Movie) {
    state.favoriteMovies.push(movie);
  },
  removeFavoriteMovie(state, movieId: number) {
    state.favoriteMovies = state.favoriteMovies.filter(movie => movie.id !== movieId);
  },
  setApiResponse(state, response: ApiResponse) {
    state.apiResponse = response;
  },
  setError(state: MoviesState, error: { message: string; code: number }) {
    state.error = error;
  },
};
