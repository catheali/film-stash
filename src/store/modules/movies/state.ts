import { MoviesState } from '@/types';

export const state: MoviesState = {
  allMovies: [],
  favoriteMovies: [],
  error: {
	success: null,
    message: null,
    code: null,
  },
  totalPages: 0,
  totalResults: 0,
  selectedMovie: null
};