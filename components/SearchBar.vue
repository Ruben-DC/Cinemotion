<script setup lang="ts">
	const props = defineProps<{
		category: 'all' | 'tv' | 'movie';
	}>();

	const searchPlaceholder = ref<'un film' | 'une série'>('une série');

	onMounted(() => {
		setInterval(() => {
			if (searchPlaceholder.value === 'un film') {
				searchPlaceholder.value = 'une série';
			} else {
				searchPlaceholder.value = 'un film';
			}
		}, 2000);
	});

	const query = ref('');

	const search = async (mediaType: string, query: string) => {
		if (mediaType === 'all') {
			const movies = await $fetch(`/api/tmdb/search/movie?${query}`);

			const tvs = await $fetch(`/api/tmdb/search/tv?${query}`);

			const results = [];
			results.push(movies, tvs);
			console.log(results);

			return results;
		} else {
			const data = await $fetch(`/api/tmdb/search/${mediaType}?${query}`);

			return data;
		}
	};
</script>

<template>
	<div class="search__container">
		<input
			class="search__input"
			type="search"
			:placeholder="`Chercher ${searchPlaceholder}`"
			v-model="query"
			@input="search(category, query)"
		/>
	</div>
</template>

<style lang="scss" scoped>
	.search {
		&__container {
			display: flex;
			justify-content: center;
			align-items: center;

			width: 100%;
		}

		&__input {
			width: 100%;
			height: 65px;

			padding: 20px 20px 20px 30px;

			border: solid 1px $strokes;
			border-radius: 15px;

			background: $bg;

			&:hover {
				border: solid 5px $bg-2;
				border-radius: 20px;

				transition: border 0.1s ease-in-out;
			}

			&:focus {
				border: solid 5px $bg-2;
				border-radius: 20px;

				transition: border 0.1s ease-in-out;
			}
		}
	}
</style>
