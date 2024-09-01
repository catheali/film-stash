<template>
	<div class="custom-card" @click="goToDetails()">
		<div class="poster">
			<img :src="getImageUrl(movie.poster_path)" alt="">
		</div>
		<div class="details">
			<span class="movie-name">{{ movie.title }}</span>
			<div class="movie-details">
				<p> Average Votes:
					{{ movie.vote_average }}
				</p>

				<p> Number of Votes:
					{{ movie.vote_count }}
				</p>

				<p> Popularity:
					{{ movie.popularity }}

				</p>
			</div>
			
		</div>
		
	</div>

</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useRouter } from 'vue-router'
import { Movie } from '@/types'

export default defineComponent({
	name:"MovieCard",
	props: {
	  movie: {
		  type: Object as PropType<Movie>,
		  required: true
		}
	},
	setup (props) {
		const BASE_IMAGE_URL = 'http://image.tmdb.org/t/p/w500'

		const router = useRouter()

		const getImageUrl = (path: string) => `${BASE_IMAGE_URL}${path}`

		const goToDetails = () => {
		  router.push({ name: 'movie', params: { id: props.movie.id } })
		}
		
		return {
			getImageUrl,
			goToDetails
		}
	}
})
</script>

<style lang="scss" scoped>
	@import "@/assets/styles/scss/app.scss";
</style>
