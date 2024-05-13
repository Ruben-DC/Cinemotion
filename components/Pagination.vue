<script setup lang="ts">
	import { defineProps } from 'vue';
	import { useRoute, useRouter } from 'vue-router';

	const props = defineProps<{
		pageMax: number;
	}>();

	const emit = defineEmits(['pageChange']);

	const route = useRoute();
	const router = useRouter();

	console.log(route.params.list);

	const previous = () => {
		const page = parseInt(route.query.page as string);

		if (!isNaN(page) && page > 1) {
			router.push(`${route.params.list[1]}?page=${page - 1}`);
			emit('pageChange');
		}
	};

	const next = () => {
		const page = parseInt(route.query.page as string);

		if (!isNaN(page) && page < props.pageMax) {
			router.push(`${route.params.list[1]}?page=${page + 1}`);
			emit('pageChange');
		}
	};
</script>

<template>
	<div class="pagination">
		<div class="button previous" @click="previous()">
			<Icon name="lucide:chevron-left" />
		</div>

		<p>{{ route.query.page }} / {{ pageMax }}</p>

		<div class="button previous" @click="next()">
			<Icon name="lucide:chevron-right" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.pagination {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;

		user-select: none;

		.button {
			padding: 5px;
			border: solid 1px $strokes;
			border-radius: 5px;
			background: $bg;

			transition: background 0.2s ease-in-out;

			&:hover {
				cursor: pointer;
				background: $bg-2;
			}
		}
	}
</style>
