<template>
	<div class="movies-view">
		<div class="title-movies">
			<h1>Top Rated Movies</h1>
		</div>
		<Pagination :endpointContext="'top_rated'"/>
		<div class="movie-gallery"  >
			<MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
		</div>	
		
	</div>
</template>
  
<script lang="ts">
  import { defineComponent, onMounted , computed, ref } from 'vue';
  import MovieCard from '../components/cards/MovieCard.vue';
  import { useStore } from 'vuex';
  import Pagination from '@/components/Pagination.vue';
  
  export default defineComponent({
		components: { MovieCard, Pagination },
		name: 'MoviesView',
	setup() {
		const store = useStore();
		const currentPage = ref(1);
		const loadData = () => {
			const endpoint = `top_rated?page=${currentPage.value}`;
			store.dispatch('fetchMovies', endpoint);
		};
		
		const movies = computed(() => store.getters.allMovies);
		
		onMounted(() => {
			loadData();
		});

		return {
			movies,
			currentPage
		}
	}
	});
</script>
  
<style lang="scss" scoped>
	@import "@/assets/styles/scss/app.scss";
</style>