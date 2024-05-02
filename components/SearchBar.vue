<script setup lang="ts">
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
</script>

<template>
	<div class="search__container">
		<input
			class="search__input"
			type="search"
			:placeholder="`Chercher ${searchPlaceholder}`"
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
			max-width: 700px;
			// height: 60px;

			border-radius: 15px;

			background: $bg-2;

			&:hover {
			}
		}

		&__input {
			width: 100%;
			height: 100%;

			padding: 20px 20px 20px 30px;

			border: solid 1px $strokes;
			border-radius: 15px;

			background: $bg;
		}
	}
</style>
