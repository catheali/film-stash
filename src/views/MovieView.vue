<template>
	<div class="movie-layout" v-if="selectedMovie">
		<div class="image-section">
			<img :src="getImageUrl(selectedMovie.poster_path)" alt="">
		</div>
		<div class="text-section"> 
			
			<h1>{{ selectedMovie.title }}</h1>
			<p>{{ selectedMovie.overview }}</p>
			<div class="info-box">
				<p>Genre: {{ selectedMovie.genres.map(genre => genre.name).join(', ') }}</p>
				<p>Release Date: {{ selectedMovie.release_date }}</p>
				<p>Revenue: ${{ selectedMovie.revenue.toLocaleString() }}</p>
				<AddToFavoritesButton :id="selectedMovie.id" /> 
			</div>
		</div>
	</div>
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted, computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { useStore } from 'vuex';
  import AddToFavoritesButton from '../components/cards/AddToFavoritesButton.vue';


  export default defineComponent({
	name: 'movie',
	components: {AddToFavoritesButton},
	setup() {
		const store = useStore();
		const route = useRoute();
		
		const BASE_IMAGE_URL = 'http://image.tmdb.org/t/p/w500'
		const getImageUrl = (path: string) => `${BASE_IMAGE_URL}${path}`


		onMounted(async () => {
		const movieId = route.params.id as string; 
			store.dispatch('fetchDetails', movieId);
		});
		
		const selectedMovie = computed(() => store.getters.getSelectedMovie);

		return {
			selectedMovie,
			getImageUrl
		}
		},
  });
  </script>
  
  <style scoped lang="scss">
	.movie-layout {
	display: flex;
	height: 100vh;
	overflow: hidden;

	.add-to-favorite {
		display: flex;
	}

	.image-section {
		flex: 1;
		background-color: #f0f0f0;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;

		img {
		max-width: 100%;
		height: auto;
		object-fit: cover;
		}
	}

	.text-section {
		flex: 1;
		padding: 20px;
		background-color: #fff;
		overflow-y: auto;

		h1 {
		font-size: 2rem;
		margin-bottom: 1rem;
		}

		p {
		font-size: 1rem;
		line-height: 1.5;
		margin-bottom: 1rem;
		}

		.info-box {
		border: 1px solid #ddd;
		border-radius: 5px;
		padding: 10px;
		background-color: #f9f9f9;

		p {
			margin: 0;
			font-size: 0.9rem;
		}
		}
	}
}
  </style>
  