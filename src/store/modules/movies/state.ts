import { MoviesState } from '@/types';

export const state: MoviesState = {
  allMovies: [],
  favoriteMovies: [],
  apiResponse: null,
  error: {
	success: null,
    message: null,
    code: null,
  },
  totalPages: 0,
  totalResults: 0
};