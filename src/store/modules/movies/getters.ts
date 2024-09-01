import { GetterTree } from 'vuex';
import { RootState, MoviesState } from  '@/types';

export const getters: GetterTree<MoviesState, RootState> = {
  allMovies: (state) => state.allMovies,
  favoriteMovies: (state) => state.favoriteMovies,
  getApiResponse: (state) => state.apiResponse,
  getError: (state) => state.error,
  getTotalResults: (state) => state.totalResults,
  getTotalPages: (state) => state.totalPages,
  getSelectedMovie: (state) => state.selectedMovie
};
