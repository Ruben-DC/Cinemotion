<script setup lang="ts">
	import type { MediaInfos } from '~/types';

	const { data: discover }: { data: Ref<MediaInfos> } = await useFetch(
		'/api/tmdb/movie/discover',
		{
			lazy: true,
		}
	);

	let { data: backdrop }: { data: Ref<string> } = await useFetch(
		`/api/tmdb/img/${discover.value.backdrop_path}`,
		{
			lazy: true,
		}
	);

	console.log(backdrop.value);

	const { data: tvs }: { data: Ref<MediaInfos[]> } = await useFetch(
		'/api/tmdb/tv/airing',
		{
			lazy: true,
		}
	);

	const { data: movies }: { data: Ref<MediaInfos[]> } = await useFetch(
		'/api/tmdb/movie/intheatres',
		{
			lazy: true,
		}
	);
</script>

<template>
	<div class="discover">
		<div
			v-if="backdrop"
			:style="`background: url(${backdrop}); 
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;`"
			class="discover__image"
		></div>
		<!-- <NuxtImg
			v-if="backdrop"
			class="discover__backdrop"
			:src="backdrop"
			format="webp"
		/> -->

		<h1 class="discover__title">
			<NuxtLink :to="`/movie/${discover.id}`">
				{{ discover.title }}
			</NuxtLink>
		</h1>
	</div>

	<div class="content">
		<SearchBar class="search-bar" />

		<div class="suggestions">
			<div class="suggestions__category">
				<h2 class="suggestions__category__name">
					<Icon name="lucide:tv" /> Séries
				</h2>

				<ul class="suggestions__list">
					<li v-if="tvs" v-for="tv in tvs.slice(0, 10)" :key="tv.id">
						<MediaCard :media="tv" />
					</li>
				</ul>
			</div>

			<div class="suggestions__category">
				<h2 class="suggestions__category__name">
					<Icon name="lucide:clapperboard" /> Films
				</h2>

				<ul class="suggestions__list">
					<li
						v-if="movies"
						v-for="movie in movies.slice(0, 10)"
						:key="movie.id"
					>
						<MediaCard :media="movie" />
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.discover {
		position: relative;

		width: 100%;
		height: 100vh;

		&__image {
			width: 100%;
			height: 100%;

			// background: url(https://image.tmdb.org/t/p/original//2KGxQFV9Wp1MshPBf8BuqWUgVAz.jpg);
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;

			opacity: 0.9;
			box-shadow: inset 0 -450px 170px -200px #000000;
		}

		&__backdrop {
			width: 100%;
			height: 100%;

			object-fit: cover;

			opacity: 0.9;
			box-shadow: inset 0 -450px 170px -200px #000000;
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

	.content {
		position: relative;

		width: 100%;
		max-width: 920px;
		padding: 0 5px;

		.search-bar {
			position: absolute;
			top: 0;
			left: 50%;
			transform: translateX(-50%);
		}
	}

	.suggestions {
		display: flex;
		flex-direction: column;
		gap: 50px;

		width: 100%;
		margin-top: 150px;

		&__category {
			display: flex;
			flex-direction: column;
			gap: 30px;

			&__header {
				display: flex;
				gap: 30px;
				align-items: center;

				.divider {
					display: block;
					width: 100%;
					height: 1px;
					border: none;
					background: $strokes;
				}

				.link {
					font-size: 1.4rem;
					text-wrap: nowrap;
				}
			}

			&__name {
				display: flex;
				align-items: center;
				gap: 10px;

				font-size: 2.2rem;
				font-weight: 400;
			}
		}

		&__list {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
			gap: 30px;

			width: 100%;
		}
	}
</style>
