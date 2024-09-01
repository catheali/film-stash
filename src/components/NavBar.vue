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

<style lang="scss" scoped>
	@import "@/assets/styles/scss/app.scss";
</style>