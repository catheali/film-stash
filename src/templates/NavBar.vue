<template>
	<header>
		<div class="logo">
			<router-link to="/">
				<span>Film</span>
				<span>Stash</span>
			</router-link>
		</div>
		<nav>	
			<ul>
				<li><router-link to="/">Top Rated Movies</router-link></li>
				<li><router-link to="/my-favorites">My Favorite Movies</router-link></li>
				<li><router-link to="/about">About</router-link></li>
			</ul>
		</nav>
	</header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: "NavBar"
})
</script>

<style lang="scss">

header {
	display: flex;
	justify-content: space-between;
	color: $color_primmary;
	padding: 1rem;
	
	.logo {
		font-family: Inter;
		font-size: 2rem;
		color: $white;
	}

	div {
		display: flex;
	}

	nav {	
			ul {
				display: flex;
				justify-content: space-evenly;
				align-items: center;
				gap:10px;
				li {
				list-style-type: none;
			
				}
			}
			
		}

		@media (max-width: 768px) {
			background-color: #e0e0e0;
			padding: 15px;
		}

		@media (max-width: 480px) {
			background-color: #d0d0d0;
			padding: 10px;
		}
	& {
		@include cinematic-gradient(); 
	}
}

</style>