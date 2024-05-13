<script setup lang="ts">
	const props = defineProps<{
		width: number;
		height: number;
	}>();
</script>

<template>
	<li
		class="placeholder"
		:style="`width: ${width}px; height: ${height}px;`"
	></li>
</template>

<style lang="scss" scoped>
	.placeholder {
		background: linear-gradient(270deg, #ff014c, #000000);
		background-size: 400% 400%;

		-webkit-animation: placeholder 1s ease infinite;
		-moz-animation: placeholder 1s ease infinite;
		-o-animation: placeholder 1s ease infinite;
		animation: placeholder 1s ease infinite;

		border-radius: 15px;
	}
</style>
