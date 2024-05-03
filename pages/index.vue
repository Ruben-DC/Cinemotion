<script setup lang="ts">
	import type { MediaInfos } from '~/types';

	const movies: Ref<MediaInfos[]> = ref([]);

	const fetchMovies = async () => {
		const { data } = await useFetch('/api/tmdb/movie/intheatres', {
			lazy: true,
		});

		return data.value;
	};
	movies.value = await fetchMovies();
</script>

<template>
	<div class="discover">
		<div class="discover__image"></div>
		<h1 class="discover__title">
			<NuxtLink to="/"> Oppenheimer </NuxtLink>
		</h1>
	</div>

	<div class="content">
		<SearchBar class="search-bar" />

		<div class="suggestions">
			<!-- <div class="suggestions__category">
				<div class="suggestions__category__header">
					<h2 class="suggestions__category__name">
						<Icon name="lucide:flame" /> Populaires
					</h2>
					<hr class="divider" />
					<NuxtLink to="/" class="link">voir plus</NuxtLink>
				</div>

				<ul class="suggestions__list">
					<li v-if="popular" v-for="media in popular" :key="media.id">
						<MediaCard :media="media" />
					</li>
				</ul>
			</div>

			<div class="suggestions__category">
				<h2 class="suggestions__category__name">
					<Icon name="lucide:tv" /> Séries
				</h2>

				<ul class="suggestions__list">
					<li v-if="tvs" v-for="tv in tvs" :key="tv.id">
						<MediaCard :media="tv" />
					</li>
				</ul>
			</div>
-->
			<div class="suggestions__category">
				<h2 class="suggestions__category__name">
					<Icon name="lucide:clapperboard" /> Films
				</h2>

				<ul class="suggestions__list">
					<li v-if="movies" v-for="movie in movies" :key="movie.id">
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

			background: url(https://www.syfy.com/sites/syfy/files/2022/07/untitled-1_9.jpg;);
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;

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
			display: flex;
			justify-content: center;
			gap: 30px;
			flex-wrap: wrap;

			width: 100%;
		}
	}
</style>
