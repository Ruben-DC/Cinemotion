<script setup lang="ts">
	const route = useRoute();

	const { data: details, pending } = await useFetch(
		`/api/tmdb/movie/${route.params.id}`,
		{
			lazy: true,
		}
	);

	const { data: recos, pending: pendingRecos } = await useFetch(
		`/api/tmdb/movie/list/reco/${route.params.id}`,
		{
			lazy: true,
		}
	);

	const { data: similars, pending: pendingSimilars } = await useFetch(
		`/api/tmdb/movie/list/similar/${route.params.id}`,
		{
			lazy: true,
		}
	);
</script>

<template>
	<div v-if="pending">pending</div>
	<div v-else class="details">
		<div
			:style="`background: url(${$config.public.imageBaseUrl}/${details?.backdrop_path}); 
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;`"
			class="details__backdrop"
		></div>

		<div class="details__backdrop__shadow"></div>

		<div class="details__container">
			<CardTilt
				v-if="details?.poster_path"
				class="media__poster"
				:poster="`${$config.public.imageBaseUrl}/${details.poster_path}`"
				:width="300"
				:height="400"
			/>

			<div class="details__infos">
				<h1 class="details__infos__title">
					{{ details?.title }}
				</h1>

				<p class="details__infos__genres">
					<span
						v-for="genre in details?.genres.slice(0, 5)"
						class="genre"
					>
						{{ genre.name }}
					</span>
				</p>

				<p class="details__infos__row">
					<span class="date">{{
						details?.release_date?.replace(/-/g, '/')
					}}</span>

					<Icon name="lucide:dot" size="20" />

					<span class="runtime">{{ details?.runtime }} m</span>

					<Icon name="lucide:dot" size="20" />

					<span class="production-companies">
						<span
							class="company"
							v-for="company in details?.production_companies.slice(
								0,
								3
							)"
						>
							{{ company.name }}
						</span>
					</span>
				</p>

				<div class="details__infos__overview__wrapper">
					<p class="details__infos__overview__text">
						{{ details?.overview }}
					</p>
				</div>
			</div>
		</div>
	</div>

	<div class="suggestions">
		<div class="suggestions__category">
			<div class="suggestions__category__header">
				<h2 class="name">Recommandations</h2>

				<hr class="divider" />
			</div>

			<ul class="suggestions__list">
				<Placeholder
					:width="150"
					:height="200"
					v-if="pendingRecos"
					v-for="i in 10"
					:key="i"
				/>

				<li
					v-else
					v-for="reco in recos?.results.slice(0, 10)"
					:key="reco.id"
				>
					<NuxtLink :to="`/movie/${reco.id}`">
						<MediaCard :media="reco" />
					</NuxtLink>
				</li>
			</ul>
		</div>

		<div class="suggestions__category">
			<div class="suggestions__category__header">
				<h2 class="name">Similaires</h2>

				<hr class="divider" />
			</div>
			<ul class="suggestions__list">
				<Placeholder
					:width="150"
					:height="200"
					v-if="pendingSimilars"
					v-for="i in 10"
					:key="i"
				/>

				<li
					v-else
					v-for="similar in similars?.results.slice(0, 10)"
					:key="similar.id"
				>
					<NuxtLink :to="`/movie/${similar.id}`">
						<MediaCard :media="similar" />
					</NuxtLink>
				</li>
			</ul>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.details {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;

		width: 100%;
		min-height: 100vh;

		&__backdrop {
			position: absolute;
			width: 100%;
			height: 100%;

			box-shadow: inset 0 -450px 670px -200px #000000;

			&__shadow {
				position: absolute;
				width: 100%;
				height: 100%;

				background: #00000089;
			}
		}

		&__container {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 20px;

			height: 400px;
			width: 100%;
			max-width: 900px;
			margin: 0 10px;

			@media screen and (max-width: 700px) {
				flex-direction: column;

				height: auto;
				margin: 50px 0;
				padding: 0 10px;
			}
		}

		&__infos {
			flex: 1;
			position: relative;

			display: flex;
			flex-direction: column;
			gap: 10px;

			height: 100%;
			width: 100%;

			&__title {
				font-family: 'Playfair Display';
				font-weight: 400;
				font-size: 4.8rem;
			}

			&__genres {
				display: flex;
				gap: 10px;

				.genre {
					border-radius: 5px;
					background: #ffffff10;
					backdrop-filter: blur(110px);
					padding: 5px 15px;

					font-size: 1.2rem;
				}
			}

			&__row {
				display: flex;
				align-items: center;

				width: 100%;

				font-size: 1.2rem;

				span {
					text-wrap: nowrap;
					flex-wrap: wrap;
				}

				.production-companies {
					display: flex;
					gap: 10px;

					width: 100%;
				}
			}

			&__overview {
				&__wrapper {
					border-radius: 15px;
					background: #ffffff10;
					backdrop-filter: blur(110px);
					padding: 20px;

					font-size: 1.8rem;
					line-height: 1.1;
				}

				&__text {
					display: -webkit-box;
					-webkit-line-clamp: 7;
					-webkit-box-orient: vertical;
					overflow: hidden;
				}
			}
		}
	}

	.placeholder {
		width: 150px;
		height: 200px;
		background: $bg-2;
	}
</style>
