<script setup lang="ts">
	const route = useRoute();
	const tvList = route.params.list[1];

	const { data, pending, refresh } = await useFetch(
		`/api/tmdb/tv/list/${tvList}`,
		{
			lazy: true,
			query: { page: route.query.page },
		}
	);

	const pageName = ref('');

	switch (tvList) {
		case 'airing':
			pageName.value = "Diffusées aujourd'hui";
			break;
		case 'popular':
			pageName.value = 'Populaires';
			break;
		case 'top':
			pageName.value = 'Les mieux notés';
			break;
		case 'ontheair':
			pageName.value = 'À venir';
			break;
	}
</script>

<template>
	<div class="header">
		<NuxtLink to="/tv" class="back-link">
			<Icon name="lucide:chevron-left" />
			Séries
		</NuxtLink>

		<h2 class="page-title">{{ pageName }}</h2>
	</div>

	<div class="suggestions">
		<div class="results infos">
			<p class="pages">page : {{ route.query.page }}</p>

			<div class="results">
				résultats : {{ data?.length * route.query.page }}
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

				<li v-else v-for="media in data" :key="media.id">
					<NuxtLink :to="`/tv/${media.id}`">
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
