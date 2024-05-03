<script setup lang="ts">
	import type { MediaInfos } from '~/types';

	const props = defineProps<{
		media: MediaInfos;
	}>();

	let { data: poster } = await useFetch(
		`/api/tmdb/img/${props.media.poster_path}`,
		{
			lazy: true,
		}
	);
</script>

<template>
	<div class="media-card">
		<NuxtImg
			class="media__poster"
			:src="poster"
			format="webp"
			width="150"
			height="200"
		/>

		<h3 class="media__title">{{ media.title }}</h3>

		<div class="media__infos">
			<p class="media__release">{{ media.release_date }}</p>

			<!-- <p class="media__runtime">
				<span class="dot"></span>
				{{ media }} 
			</p> -->
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.media {
		&-card {
			display: flex;
			flex-direction: column;
			gap: 5px;

			width: 150px;
		}

		&__poster {
			// aspect-ratio: 150/200;
			// width: 100%;
			object-fit: cover;
			border-radius: 15px;
		}

		&__title {
			font-size: 1.8rem;
			font-weight: 400;
		}

		&__infos {
			display: flex;
			align-items: center;
			gap: 15px;

			color: $infos;
			font-size: 1.4rem;
		}

		&__runtime {
			display: flex;
			align-items: center;
			gap: 5px;

			.dot {
				display: block;

				border-radius: 20px;
				width: 5px;
				height: 5px;

				background: $accent;
			}
		}
	}
</style>
