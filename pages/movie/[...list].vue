<script setup lang="ts">
	const route = useRoute();
	const movieList = route.params.list[1];

	const { data, pending, refresh } = await useFetch(
		`/api/tmdb/movie/list/${movieList}`,
		{
			lazy: true,
			query: { page: route.query.page },
		}
	);

	const pageName = ref('');

	switch (movieList) {
		case 'intheatres':
			pageName.value = 'En salles';
			break;
		case 'popular':
			pageName.value = 'Populaires';
			break;
		case 'top':
			pageName.value = 'Les mieux notés';
			break;
		case 'upcoming':
			pageName.value = 'À venir';
			break;
	}
</script>

<template>
	<div class="header">
		<NuxtLink to="/movie" class="back-link">
			<Icon name="lucide:chevron-left" />
			Films
		</NuxtLink>

		<h2 class="page-title">{{ pageName }}</h2>
	</div>

	<div class="suggestions">
		<div class="results infos">
			<p class="pages">
				page : {{ route.query.page }} / {{ data?.total_pages }}
			</p>

			<div class="results">
				résultats : {{ data?.results.length * route.query.page }} /
				{{ data?.total_results }}
			</div>
		</div>

		<div class="suggestions__category">
			<ul class="suggestions__list">
				<Placeholder
					:width="150"
					:height="200"
					v-if="pending"
					v-for="i in 20"
					:key="i"
				/>

				<li v-else v-for="media in data?.results" :key="media.id">
					<NuxtLink :to="`/movie/${media.id}`">
						<MediaCard :media="media" />
					</NuxtLink>
				</li>
			</ul>
		</div>

		<!-- <Pagination
			:page-max="data?.total_pages"
			@page-change="refreshDatas"
		/> -->
	</div>
</template>

<style lang="scss" scoped>
	.header {
		display: flex;
		flex-direction: column;
		gap: 30px;

		width: 100%;
		max-width: 920px;
		margin-top: 150px;
		padding: 0 10px;

		@media screen and (max-width: 700px) {
			margin-top: 50px;
		}

		.page-title {
			font-weight: 600;
			font-size: 4.8rem;
		}
	}

	.results {
		display: flex;
		justify-content: space-between;
	}
</style>
