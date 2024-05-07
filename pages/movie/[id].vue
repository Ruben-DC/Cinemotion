<script setup lang="ts">
	const route = useRoute();

	const { data: details, pending } = await useFetch(
		`/api/tmdb/movie/${route.params.id}`,
		{
			lazy: true,
		}
	);
</script>

<template>
	<div class="details">
		<div v-if="pending">pending</div>
		<div
			v-else
			:style="`background: url(${$config.public.imageBaseUrl}/${details?.backdrop_path}); 
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;`"
			class="details__backdrop"
		></div>

		<div class="details__infos__wrapper">
			<NuxtImg class="details__infos__poster" />

			<div class="details__infos">
				<h1 class="discover__title">
					{{ details?.title }}
				</h1>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.details {
		position: relative;

		width: 100%;
		height: 100vh;

		&__backdrop {
			z-index: 0;
			position: absolute;
			width: 100%;
			height: 100%;

			box-shadow: inset 0 -450px 170px -200px #000000;
		}

		&__infos {
			&__wrapper {
				z-index: 100;

				display: flex;
				justify-content: center;
				align-items: center;

				width: 100%;
				height: 100%;
			}

			&__title {
				position: absolute;
				bottom: 15%;
				left: 50%;
				transform: translateX(-50%);

				font-family: 'Playfair Display';
				font-weight: 400;
				font-size: 4.8rem;
			}
		}
	}
</style>
