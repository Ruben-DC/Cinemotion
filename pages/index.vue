<script setup lang="ts"></script>

<template>
	<div class="discover">
		<div class="discover__image"></div>
		<h1 class="discover__title">Oppenheimer</h1>
	</div>

	<SearchBar />

	<div class="content">test</div>
</template>

<style lang="scss" scoped>
	.discover {
		position: relative;
		// top: 0;
		// left: 0;
		width: 100%;
		height: 100vh;

		// box-shadow: 0 1000px 100px rgb(255, 0, 0);

		&__image {
			width: 100%;
			height: 100%;

			background: url(https://www.syfy.com/sites/syfy/files/2022/07/untitled-1_9.jpg;);
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;

			opacity: 0.9;
			box-shadow: inset 0 -450px 170px -200px #000000;
		}

		&__title {
			position: absolute;
			bottom: 15%;
			left: 50%;
			transform: translateX(-50%);

			font-family: 'Playfair Display';
			font-weight: 400;
			font-size: 4.8rem;
		}
	}

	.content {
		width: 100%;
		max-width: 900px;
	}
</style>
