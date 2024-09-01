<template>
	<div class="custom-card" @click="goToDetails()">
		<div class="poster">

			<img :src="getImageUrl(movie.poster_path)" alt="">
			
			<!-- <img :src="url" alt="" /> -->
		</div>
		<div class="details">
			<span class=" movie-name">{{ movie.title }}</span>


			<div class="movie-details">
				<p> Media de Votos:
					{{ movie.vote_average }}
				</p>

				<p> Quantidade de Votos:
					{{ movie.vote_count }}
				</p>

				<p> POpularidade:
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

<style lang="scss" scoped >
.custom-card {
	position:relative;
	width: 320px;
	height: 428px;
	background: #681519;
	border-radius: 20px;
	box-shadow: 0 15px 35px #681519(6, 1, 1, 0.677);
	&:hover {
		.poster{
			&::before{
				bottom:0px;
			}
			img {
				transform: translateY(-60px) ;
				filter: blur(3px);
			}
		}
		.details{
			bottom: 320px;
			.movie-name{
				color: rgb(252, 252, 252) !important;
				font-size: 1rem;
				transition: 0.5s;
			}

			span {
				color: $white;
			}
			
		}
		
	}
	.poster{
		position: relative;
		overflow: hidden;
		&::before {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			background: linear-gradient(0deg, #681519 40%, transparent);
			transition: 0.5s;
			z-index: 1;
			bottom: -200px;
		}
		img{
			width: 100%;
			transition: 0.5s;
		}
	}
	.details{
		position: absolute;
		width: 100%;
		bottom: 0;
		transition: 0.5s;
		
	
		.movie-name{
			font-size: 2rem;
			transition: 0.5s;

		}
		span {
				color: $white;
			}
	}

}
</style>