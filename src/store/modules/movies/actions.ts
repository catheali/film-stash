
import { ActionTree, ActionContext } from 'vuex';
import { RootState, MoviesState, Movie, ApiResponse } from '@/types';
import apiService from '@/services/apiService';

export const actions: ActionTree<MoviesState, RootState> = {

	async fetchMovies({ commit }, endpoint: string) {
		try {
		  const response = await apiService.getData(endpoint);
		  const movies: ApiResponse = response.data;
		  commit('setMovies', movies.results) 
		  commit('setApiResponse', movies);
		  commit('setTotalPages', movies.total_pages)
		  commit('setTotalResults', movies.total_results)
		} catch (error) {
		  console.error('Erro ao buscar filmes:', error.message);
		  commit('setError', error)
		}
	},

	async fetchImageUrl({ commit }) {
		try {
		  const response = await apiService.getData('configuration');
		  const movies: ApiResponse = response.data;
		  commit('setMovies', movies.results) 
		  commit('setApiResponse', movies);
		} catch (error) {
		  console.error('Erro ao buscar filmes:', error.message);
		  commit('setError', error)
		}
	},

};
