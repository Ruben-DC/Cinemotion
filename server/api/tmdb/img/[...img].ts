export default defineEventHandler(async (event) => {
	const baseUrl = 'https://image.tmdb.org/t/p/original';
	return baseUrl + event.context.params?.img;
});
