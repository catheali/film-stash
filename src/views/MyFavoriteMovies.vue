<template>
	<div class="movie-view favorite-view">
		<div class="favorite-movies">
				<div class="title-movies">
					<h1>Favorite Movies</h1>
				</div>
			<div v-if="favoriteMovies && favoriteMovies.length > 0">
			<div class="clear-favorites">
				<button @click="clearFavoriteMovies"> Clear Favorite Movies</button>
			</div>
			<div class="movie-gallery"  >
				<MovieCard v-for="movie in favoriteMovies" :key="movie.id" :movie="movie" />
			</div>	
		</div>
		<div v-else>
			<p>No favorite movies</p>
		</div>
		</div>
	</div>
  </template>
  
  <script lang="ts">
 import { defineComponent, computed } from 'vue';
 import { useStore } from 'vuex';
 import MovieCard from '../components/cards/MovieCard.vue';

  export default defineComponent({
	name: 'MyFavoriteMovies',
	components: {
		MovieCard
	},
	setup() {
		const store = useStore();
		const favoriteMovies = computed(() => store.getters.favoriteMovies);
		const clearFavoriteMovies = ()=>{
			store.dispatch('removeFavorites');
		};
	  
	  return {
		favoriteMovies,
		clearFavoriteMovies
	  };
	},
  });
  </script>
  

  <style lang="scss" scoped>

  .favorite-view {
	height: 120vh;
	padding: 20px;
  
  }
</style>
