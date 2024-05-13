<script setup lang="ts">
	const { data: airing, pending: pendingAiring } = await useFetch(
		'/api/tmdb/tv/list/airing',
		{ lazy: true }
	);

	const { data: popular, pending: pendingPopular } = await useFetch(
		'/api/tmdb/tv/list/popular',
		{ lazy: true }
	);

	const { data: ontheair, pending: pendingOntheair } = await useFetch(
		'/api/tmdb/tv/list/ontheair',
		{ lazy: true }
	);

	const { data: top, pending: pendingTop } = await useFetch(
		'/api/tmdb/tv/list/top',
		{ lazy: true }
	);
</script>

<template>
	<div class="header">
		<NuxtLink to="/" class="back-link">
			<Icon name="lucide:chevron-left" />
			Retour
		</NuxtLink>

		<h2 class="page-title">Séries</h2>
	</div>

	<div class="suggestions">
		<div class="suggestions__category">
			<div class="suggestions__category__header">
				<h2 class="name">Diffusées aujourd'hui</h2>

				<hr class="divider" />

				<NuxtLink to="/tv/list/airing?page=1" class="link">
					voir plus
				</NuxtLink>
			</div>

			<ul class="suggestions__list">
				<Placeholder
					:width="150"
					:height="200"
					v-if="pendingAiring"
					v-for="i in 10"
					:key="i"
				/>

				<li
					v-else
					v-for="media in airing?.slice(0, 10)"
					:key="media.id"
				>
					<NuxtLink :to="`/tv/${media.id}`">
						<MediaCard :media="media" />
					</NuxtLink>
				</li>
			</ul>
		</div>

		<div class="suggestions__category">
			<div class="suggestions__category__header">
				<h2 class="name">Populaires</h2>

				<hr class="divider" />

				<NuxtLink to="/tv/list/popular?page=1" class="link">
					voir plus
				</NuxtLink>
			</div>

			<ul class="suggestions__list">
				<Placeholder
					:width="150"
					:height="200"
					v-if="pendingPopular"
					v-for="i in 10"
					:key="i"
				/>

				<li
					v-else
					v-for="media in popular?.slice(0, 10)"
					:key="media.id"
				>
					<NuxtLink :to="`/tv/${media.id}`">
						<MediaCard :media="media" />
					</NuxtLink>
				</li>
			</ul>
		</div>

		<div class="suggestions__category">
			<div class="suggestions__category__header">
				<h2 class="name">A venir</h2>

				<hr class="divider" />

				<NuxtLink to="/tv/list/ontheair?page=1" class="link">
					voir plus
				</NuxtLink>
			</div>

			<ul class="suggestions__list">
				<Placeholder
					:width="150"
					:height="200"
					v-if="pendingOntheair"
					v-for="i in 10"
					:key="i"
				/>

				<li
					v-else
					v-for="media in ontheair?.slice(0, 10)"
					:key="media.id"
				>
					<NuxtLink :to="`/tv/${media.id}`">
						<MediaCard :media="media" />
					</NuxtLink>
				</li>
			</ul>
		</div>

		<div class="suggestions__category">
			<div class="suggestions__category__header">
				<h2 class="name">Les mieux notées</h2>

				<hr class="divider" />

				<NuxtLink to="/tv/list/top?page=1" class="link">
					voir plus
				</NuxtLink>
			</div>

			<ul class="suggestions__list">
				<Placeholder
					:width="150"
					:height="200"
					v-if="pendingTop"
					v-for="i in 10"
					:key="i"
				/>

				<li v-else v-for="media in top?.slice(0, 10)" :key="media.id">
					<NuxtLink :to="`/tv/${media.id}`">
						<MediaCard :media="media" />
					</NuxtLink>
				</li>
			</ul>
		</div>
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
</style>
