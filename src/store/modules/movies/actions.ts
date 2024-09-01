import { ActionTree, ActionContext } from 'vuex';
import { RootState, MoviesState, MovieDetails, ApiResponse } from '@/types';
import apiService from '@/services/apiService';

export const actions: ActionTree<MoviesState, RootState> = {

	async fetchMovies({ commit }, endpoint: string) {
		try {
		  const response = await apiService.getData(endpoint);
		  const movies = response.data;
		  commit('setMovies', movies.results);
		  commit('setTotalPages', movies.total_pages);
		  commit('setTotalResults', movies.total_results);
		} catch (error) {
		  console.error('Error', error.message);
		  commit('setError', error);
		}
	},

	async fetchDetails({ commit }, id: number) {
		try {
		  const response = await apiService.getData(id.toString());
		  const movieData: MovieDetails = {
			id: response.data.id,
			title: response.data.title,
			poster_path: response.data.poster_path,
			overview: response.data.overview,
			genres: response.data.genres,
			release_date: response.data.release_date,
			revenue: response.data.revenue,
		  };
		  commit('setSelectedMovie', movieData);
		} catch (error) {
		  console.error('Error:', error.message);
		  commit('setError', error)
		}
	},
	addToFavorites({ commit }, movieId: number) {
		commit('addFavoriteMovie', movieId);
		alert('Movie was sucessfully added to favorites!')
	}, 
	removeFavorites({commit}) {
		commit('removeFavoriteMovies');
		alert('All movies was removed from favorites')
	}

};
