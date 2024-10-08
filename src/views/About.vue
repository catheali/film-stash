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
  import { defineComponent } from 'vue';
   
  export default defineComponent({
	name: 'About'
  });
  </script>
  
  <style lang="scss" scoped>

  .about-project {
	height: 120vh;
	padding: 20px;
  }
</style>