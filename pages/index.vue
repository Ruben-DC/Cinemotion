<script setup lang="ts"></script>

<template>
	<div class="discover">
		a
		<div class="discover__image"></div>
	</div>

	<div class="search-bar">
		<input type="search" placeholder="Chercher un film" />
	</div>

	<div class="content">test</div>
</template>

<style lang="scss" scoped>
	.discover {
		width: 100%;
		height: 650px;

		// box-shadow: 0 1000px 100px rgb(255, 0, 0);

		&__image {
			width: 100%;
			height: 100%;

			background: url(https://www.syfy.com/sites/syfy/files/2022/07/untitled-1_9.jpg;);
			background-repeat: no-repeat;
			background-size: cover;

			box-shadow: inset 0 -450px 170px -200px #000000;
		}
	}

	.content {
		width: 100%;
		max-width: 900px;
	}
</style>
