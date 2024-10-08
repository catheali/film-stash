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
		const getImageUrl = (path: string) => {
			return `${BASE_IMAGE_URL}${path}`
		}
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
	
	.custom-card {
		position: relative;
		width: 200px; 
		height: 280px; 
		background: $card-background;
		margin: 15px;
		border-radius: 20px;
		box-shadow: 0 10px 25px $box-shadow-color; 
		cursor: pointer;

  &:hover {
    .poster {
		border-radius: 20px;

      &::before {
        bottom: 0px;
		border-radius: 20px;

      }

      img {
        border-radius: 20px;
        transform: translateY(-40px); 
        filter: blur($hover-blur);
      }
    }

    .details {
      bottom: 50px;
      border-radius: 20px;

      .movie-name {
        color: $white !important;
        font-size: 1.8rem; 
        transition: 0.5s;
      }
	  
	  .movie-details{
		color: $white;
		z-index: 2;
	  }
    }
  }

  .poster {
	border-radius: 20px;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(0deg, $card-background 40%, transparent);
      transition: 0.5s;
      z-index: 1;
      bottom: -134px; 
    }

    img {
      width: 100%;
      border-radius: 20px;
      transition: 0.5s;
    }
  }

  .details {
    position: absolute;
    width: 100%;
    bottom: 0;
    transition: 0.5s;

    .movie-name {
      font-size: 1.25rem; 
	  color: $primary_color;
      transition: 0.5s;
    }
	.movie-details{
		position: relative;
		z-index: 2;
		p {
			color: $white;
		}
	  }

  }
}

</style>
