<template>
	<footer class="footer">
	  <div class="container">
		<p>&copy; 2024 FilmStash.</p>
		<ul class="social-links">
		  <li><a href="https://linkedin.com.br/in/alicia-alencar" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
		  <li><a href="https://github.com/catheali" target="_blank" rel="noopener noreferrer">Github</a></li>
		</ul>
	  </div>
	  <div>
		<p>&copy; This product uses the <a href="https://developer.themoviedb.org/docs/getting-started" target="_blank" rel="noopener noreferrer">TMDB API</a> but is not endorsed or certified by TMDB. All rights reserved.</p>
	  </div>
	</footer>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
	name: 'Footer',
  });
  </script>

<style lang="scss" scoped>
	@import "@/assets/styles/scss/app.scss";
</style>
