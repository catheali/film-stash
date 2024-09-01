<template>
	<div class="movies-view">
		<div class="title-movies">
			<h1>Top Rated Movies</h1>
		</div>
		<div class="pagination">
			<button @click="previousPage" :disabled="currentPage === 1">Previous</button>
			<button v-for="page in visiblePages" :key="page" @click="goToPage(page)" :class="{ active: page === currentPage }">
				{{ page }}
			</button>
			<button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
		</div>
		<div class="movie-gallery"  >
			<movie-card v-for="movie in movies" :key="movie.id" :movie="movie" />
		</div>	
		
	</div>
</template>
  
<script lang="ts">
  import { defineComponent, onMounted , computed, ref } from 'vue';
  import MovieCard from '../components/cards/MovieCard.vue';
  import { useStore } from 'vuex';

  
  export default defineComponent({
		components: { MovieCard },
		name: 'MoviesView',
	setup() {
		const store = useStore();
		const currentPage = ref(1);
		const loadData = () => {
			const endpoint = `top_rated?page=${currentPage.value}`;
			store.dispatch('fetchMovies', endpoint);
		};
		
		const movies = computed(() => store.getters.allMovies);
		const totalPages = computed(() => store.getters.getTotalPages); ;
		
       console.log(totalPages.value)
		const visiblePages = computed(() => {
			const startPage = Math.max(1, currentPage.value - 1);
			const endPage = Math.min(totalPages.value, startPage + 2);
			return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
 		 });

		const goToPage = (page: number) => {
		if (page >= 1 && page <= totalPages.value) {
			currentPage.value = page;
			loadData();
		}
		};

		const nextPage = () => {
		if (currentPage.value < totalPages.value) {
			currentPage.value++;
			loadData();
		}
		};

		const previousPage = () => {
		if (currentPage.value > 1) {
			currentPage.value--;
			loadData();
		}
		};
		
		onMounted(() => {
			loadData();
		});

		return {
			movies,
			currentPage,
			totalPages,
			visiblePages,
			goToPage,
			nextPage,
			previousPage
		}
	}
	});
</script>
  
  <style lang="scss" scoped>

  .movie-gallery{
	display: flex;
	gap: 100px;
	flex-wrap: wrap;
	justify-content: center;
  }

  .title-movies {
	text-align: center;
	font-family: Limelight, sans-serif;
  }

  .pagination {
  display: flex;
  gap: 8px;
  margin-top: 20px;
}

.pagination button {
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #df0303;
}

.pagination button.active {
  font-weight: bold;
  background-color: #830707;
}

.pagination button:disabled {
  cursor: not-allowed;
  background-color: #f90000;
}

</style>
  