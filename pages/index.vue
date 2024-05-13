<script setup lang="ts">
	const { data: discover, pending: pendingDiscover } = await useFetch(
		'/api/tmdb/discover',
		{
			lazy: true,
		}
	);

	const { data: movies, pending: pendingMovies } = await useFetch(
		'/api/tmdb/movie/list/intheatres',
		{
			lazy: true,
		}
	);

	const { data: tvs, pending: pendingTvs } = await useFetch(
		'/api/tmdb/tv/list/airing',
		{
			lazy: true,
		}
	);
</script>

<template>
	<div v-if="pendingDiscover">pending...</div>
	<div v-else class="discover">
		<div
			:style="`background: url(${$config.public.imageBaseUrl}/${discover?.backdrop_path});
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;`"
			class="discover__image"
		></div>

		<NuxtLink :to="`/${discover?.mediaType}/${discover?.id}`">
			<h1 class="discover__title">
				{{ discover?.title }}

				<Icon class="discover__title__icon" name="lucide:info" />
			</h1>
		</NuxtLink>
	</div>

	<div class="content">
		<SearchBar class="search-bar" />

		<div class="suggestions">
			<div class="suggestions__category">
				<div class="suggestions__category__header">
					<h2 class="name">Films</h2>

					<hr class="divider" />

					<NuxtLink to="/movie" class="link">voir plus</NuxtLink>
				</div>

				<ul class="suggestions__list">
					<Placeholder
						:width="150"
						:height="200"
						v-if="pendingMovies"
						v-for="i in 10"
					/>

					<li
						v-else
						v-for="movie in movies?.results.slice(0, 10)"
						:key="movie.id"
					>
						<NuxtLink :to="`/movie/${movie.id}`">
							<MediaCard :media="movie" />
						</NuxtLink>
					</li>
				</ul>
			</div>

			<div class="suggestions__category">
				<div class="suggestions__category__header">
					<h2 class="name">Séries</h2>

					<hr class="divider" />

					<NuxtLink to="/tv" class="link">voir plus</NuxtLink>
				</div>

				<ul class="suggestions__list">
					<Placeholder
						:width="150"
						:height="200"
						v-if="pendingTvs"
						v-for="i in 10"
					/>

					<li v-else v-for="tv in tvs?.slice(0, 10)" :key="tv.id">
						<NuxtLink :to="`/tv/${tv.id}`">
							<MediaCard :media="tv" />
						</NuxtLink>
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
		height: 100dvh;

		@media screen and (max-width: 700px) {
			height: calc(100dvh - 50px);
		}

		&__image {
			width: 100%;
			height: 100%;

			box-shadow: inset 0 -450px 600px -200px #000000;
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

			&__icon {
				position: absolute;
				top: 0px;
				left: 0px;
				transform: translateX(-70%);

				height: 1.5rem;
				margin-bottom: 15px;
			}
		}
	}

	.content {
		position: relative;

		width: 100%;
		max-width: 910px;
		padding: 0 5px;

		.search-bar {
			position: absolute;
			top: 0;
			left: 50%;
			transform: translateX(-50%);

			padding: 0 5px;
		}
	}
</style>
