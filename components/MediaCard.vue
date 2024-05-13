<script setup lang="ts">
	import type { MediaInfos } from '~/types';

	const props = defineProps<{
		media: MediaInfos;
	}>();
</script>

<template>
	<div class="media-card">
		<CardTilt
			v-if="media.poster_path"
			class="media__poster"
			:poster="`${$config.public.imageBaseUrl}/${media.poster_path}`"
			:width="150"
			:height="200"
		/>

		<h3 class="media__title">{{ media.title }}</h3>

		<div class="media__infos">
			<p class="media__release">{{ media.release_date }}</p>

			<p class="media__runtime" v-if="media.vote_average">
				<Icon name="lucide:star" style="color: yellow" />
				{{ Math.round(media.vote_average) }}
			</p>
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

			transition: scale 0.15s;

			&:hover {
				scale: 1.05;
			}
		}

		&__poster {
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
