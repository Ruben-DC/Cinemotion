<script setup lang="ts">
	const links = [
		{
			href: '/',
			iconName: 'akar-icons:home',
			name: 'Accueil',
		},
		{
			href: '/movie',
			iconName: 'lucide:clapperboard',
			name: 'Films',
		},
		{
			href: '/tv',
			iconName: 'lucide:tv',
			name: 'Séries',
		},
	];

	const { width } = useWindowSize();
	const isMobile = ref(false);

	watchEffect(() => {
		if (width.value < 700) {
			isMobile.value = true;
		} else {
			isMobile.value = false;
		}
	});
</script>

<template>
	<div class="default-template">
		<div v-if="!isMobile" class="header__shadow"></div>
		<header v-if="!isMobile" class="header">
			<NuxtLink to="/">
				<h1 class="logo">
					<NuxtImg class="icon" src="/popcorn.png" />

					Cinemotion
				</h1>
			</NuxtLink>

			<nav class="nav">
				<NuxtLink
					class="nav__link"
					:to="`${link.href}`"
					v-for="link in links"
				>
					{{ link.name }}
				</NuxtLink>
			</nav>
		</header>

		<main>
			<slot />
		</main>

		<nav v-if="isMobile" class="tab-bar">
			<NuxtLink
				class="tab-bar__link"
				:to="link.href"
				v-for="link in links"
			>
				<Icon :name="link.iconName" />

				{{ link.name }}
			</NuxtLink>
		</nav>

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
	.header {
		&__shadow {
			z-index: 999;
			top: -300px;
			left: -50%;

			position: fixed;
			width: 200%;
			height: 300px;
			background: #000000;
			box-shadow: 0 130px 200px #000000;
		}

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
		display: flex;
		flex-direction: column;
		align-items: center;

		width: 100%;
		min-height: 100vh;
	}

	.tab-bar {
		z-index: 10000;
		position: fixed;
		bottom: 0;
		left: 0;

		display: flex;
		justify-content: space-between;

		width: 100%;
		padding: 20px 30px;

		background: $bg;
		border-top: solid 1px $strokes;

		&__link {
			display: flex;
			flex-direction: column;
			gap: 5px;
			justify-content: center;
			align-items: center;
		}
	}

	footer {
		display: flex;
		gap: 60px;

		width: 100%;
		padding: 30px 50px;
		margin-top: 200px;

		border-top: solid 1px $strokes;

		.column {
			display: flex;
			flex-direction: column;
			gap: 10px;
		}

		.icon {
			height: 10px;
		}

		@media screen and (max-width: 700px) {
			padding-bottom: 150px;
		}
	}
</style>
