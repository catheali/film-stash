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
  .footer {
	color: #fff;
	padding: 20px 0;
	text-align: center;
  
	.container {
	  max-width: 1200px;
	  margin: 0 auto;
	  padding: 0 20px;
	}
  
	p {
	  margin: 0;
	}
  
	.social-links {
	  list-style-type: none;
	  padding: 0;
	  margin: 10px 0 0;
  
	  li {
		display: inline;
		margin-right: 10px;
  
		a {
		  color: #fff;
		  text-decoration: none;
  
		  &:hover {
			text-decoration: underline;
		  }
		}
	  }
	}

	& {
		@include cinematic-gradient(); 
	}
  }
  </style>
  