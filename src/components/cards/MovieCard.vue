<template>

	<div class="custom-card">
		<div class="poster">

			
			<!-- <img :src="url" alt="" /> -->
		</div>
		<div class="details">
			<span class=" movie-name">Nós </span>
			
		</div>
	</div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name:"MovieCard",
	setup () {
		

		return {}
	}
})
</script>

<style lang="scss" scoped >
.custom-card {
	position:relative;
	width: 320px;
	height: 428px;
	background: rgb(155, 15, 15);
	border-radius: 20px;
	box-shadow: 0 15px 35px rgba(131, 24, 24, 0.677);
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
				color: rgb(238, 233, 233) !important;
				font-size: 50px;
				transition: 0.5s;
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
			background: linear-gradient(0deg, #770f0f 40%, transparent);
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
			font-size: 70px;
			transition: 0.5s;
			.firstName{
				font-size:  50px;
			}
		}
	}
}
</style>