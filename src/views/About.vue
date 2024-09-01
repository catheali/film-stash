<template>
	<div class="about-project">
	  <div > 
		<h1>
			<a href="https://github.com/catheali/film-stash"> Click here to know better this Project</a>
		</h1>
		<h5>
			This project uses TMDB Api.
		</h5>
	</div>
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
  
  <style lang="scss" scoped>
  @import "@/assets/styles/scss/app.scss";

  .about-project {
	height: 120vh;
	padding: 20px;
  }

  a {
	color: rgb(132, 127, 127);
  }
</style>