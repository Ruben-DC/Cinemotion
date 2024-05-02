<script setup lang="ts">
	const links = [
		{
			href: '/',
			iconName: 'akar-icons:home',
			name: 'Accueil',
		},
		{
			href: '/',
			iconName: 'lucide:lightbulb',
			name: 'Découvrir',
		},
		{
			href: '/',
			iconName: 'lucide:clapperboard',
			name: 'Films',
		},
		{
			href: '/',
			iconName: 'lucide:tv',
			name: 'Séries',
		},
	];
</script>

<template>
	<div class="default-template">
		<header>
			<h1 class="logo">
				<NuxtImg class="icon" src="/popcorn.png" />

				Cinémotion
			</h1>

			<nav class="nav">
				<NuxtLink class="nav__link" to="/" v-for="link in links">
					<Icon :name="link.iconName" />

					{{ link.name }}
				</NuxtLink>
			</nav>
		</header>

		<main>
			<slot />
		</main>

		<footer class="infos">
			<div class="column">
				<p>
					Développé avec

					<NuxtLink to="https://nuxt.com">
						<Icon name="vscode-icons:file-type-nuxt" />
						Nuxt JS
					</NuxtLink>
				</p>

				<p>
					Données fournies par

					<NuxtLink to="https://themoviedb.org">
						<IconsTmdb class="icon" />
					</NuxtLink>
				</p>

				<p>
					Ce projet utilise l'API TMDB mais n'est ni approuvé ni
					certifié par TMDB.
				</p>
			</div>

			<div class="column">
				<NuxtLink
					to="https://github.com/ruben-dc/cinemotion"
					target="_blank"
				>
					<Icon name="lucide:external-link" />
					repo github
				</NuxtLink>

				<p>designé avec Figma</p>
			</div>
		</footer>
	</div>
</template>

<style lang="scss" scoped>
	header {
		z-index: 1000;
		position: fixed;
		top: 0;
		left: 0;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		width: 100%;
		padding: 30px 50px;

		background: #00000010;
		backdrop-filter: blur(40px);
		font-size: 1.6rem;

		.logo {
			display: flex;
			align-items: center;
			gap: 10px;

			font-family: 'Playfair Display';
			font-weight: 500;
			font-size: 2.6rem;

			.icon {
				aspect-ratio: 1/1;
				width: 40px;
			}
		}

		.nav {
			display: flex;
			align-items: center;
			gap: 30px;

			&__link {
				display: flex;
				align-items: center;
				gap: 5px;
			}
		}
	}

	main {
		width: 100%;
		min-height: 100vh;
	}

	footer {
		display: flex;
		gap: 60px;

		width: 100%;
		padding: 30px 50px;

		border-top: solid 1px $strokes;

		.column {
			display: flex;
			flex-direction: column;
			gap: 10px;
		}

		.icon {
			height: 10px;
		}
	}
</style>
