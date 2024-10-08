<template>
	<div class="pagination">
			<button @click="previousPage" :disabled="currentPage === 1"><</button>
			<button v-for="page in visiblePages" :key="page" @click="goToPage(page)" :class="{ active: page === currentPage }">
				{{ page }}
			</button>
			<button @click="nextPage" :disabled="currentPage === totalPages">></button>
		</div>
</template>

<script lang="ts">
  import { defineComponent, onMounted , computed, ref } from 'vue';

  import { useStore } from 'vuex';

  
  export default defineComponent({
	name: 'Pagination',
	props: {
	  endpointContext: {
		type:  String,
		required: true,
	  },
	},
	setup(props) {
		const store = useStore();
		const currentPage = ref(1);
		const loadData = () => {
			const endpoint = `${props.endpointContext}?page=${currentPage.value}`;
			store.dispatch('fetchMovies', endpoint);
		};
		
		const totalPages = computed(() => store.getters.getTotalPages);
		
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
 .pagination {
	display: flex;
	justify-content: center;
	padding-bottom: 20px;
	gap: 8px;
	margin-top: 20px;
	padding-right: 20px;

	button {
		padding: 8px 12px;
		border: none;
		cursor: pointer;
		background-color: $background-light;
	  
		&.active {
		  font-weight: bold;
		  background-color: $accent-color;
		}
	  
		&:disabled {
		  cursor: not-allowed;
		  background-color: $disabled-color;
		}
	}
  }
  
</style>