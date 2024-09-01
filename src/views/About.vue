<template>
	<div class="">
	  <h1>About the project!</h1>
	</div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
   
  export default defineComponent({
	name: 'About',
	setup() {
	  
		const favoriteMovie = ref([]);

		const fetchMovies = async ()=>{

		};
		
	  return {
		favoriteMovie
	  };
	},
  });
  </script>
  
  <style scoped>
  
  </style>
  