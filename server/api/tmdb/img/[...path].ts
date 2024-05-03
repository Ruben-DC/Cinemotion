export default defineEventHandler(async (event) => {
	const baseUrl = 'https://image.tmdb.org/t/p/original/';
	const data = baseUrl + event.context.params?.path;

	return data;
});
