<script setup lang="ts">
	import VanillaTilt from 'vanilla-tilt';

	const props = defineProps<{
		poster: string;
		width: number;
		height: number;
	}>();

	const cardRef = ref();

	onMounted(() => {
		VanillaTilt.init(cardRef.value, {
			max: 8,
			speed: 400,
			glare: true,
			'max-glare': 0.5,
		});

		cardRef.value.style.backgroundImage = `url(${props.poster})`;
	});
</script>

<template>
	<div
		ref="cardRef"
		v-if="poster"
		:style="`width: ${width}px; height: ${height}px`"
		class="card"
	/>
</template>

<style lang="scss" scoped>
	.card {
		background-image: none;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		border-radius: 15px;
	}
</style>
