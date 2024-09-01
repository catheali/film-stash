<template>
	<div class="">
	  <h1>title movie</h1>

	</div>
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { useStore } from 'vuex';

   
  export default defineComponent({
	name: 'movie',
	setup() {
		const store = useStore();
		const route = useRoute();
		
		onMounted(async () => {
		const movieId = route.params.id as string; 
			let response = store.dispatch('fetchDetails', movieId);
		})
		
		return {}
		},
  });
  </script>
  
  <style scoped>
  
  </style>
  