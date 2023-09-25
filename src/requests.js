const API_KEy = "f1e23c2c0c75166cced10bbfa3f0e402"

const requests = {
	

	fetchTrending: `/trending/all/week?api__key=${API_KEy}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEy}&with_networks=213`,
	fetchTopRatedMovies: `/movie/top_rated?API_KEy=${API_KEy}&language=en-US`,
	fetchActionMovies: `/discover/movie?API_KEy=${API_KEy}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?API_KEy=${API_KEy}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?API_KEy=${API_KEy}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?API_KEy=${API_KEy}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?API_KEy=${API_KEy}&with_genres=99`,
};
export default requests;


//api.themovideodb.org/3/trending/all/week?api_key=f1e23c2c0c75166cced10bbfa3f0e402&language=en-US


    //  'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=f1e23c2c0c75166cced10bbfa3f0e402'