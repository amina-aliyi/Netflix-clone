import axios from "axios";
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
headers: {
								accept: "application/json",
								Authorization:
									"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWUyM2MyYzBjNzUxNjZjY2VkMTBiYmZhM2YwZTQwMiIsInN1YiI6IjY1MDQyMDdiZmZjOWRlMGVlMTc4OTViYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VxwhryjAhxaCyHguLt0v5Q1D8kj_K2vdnBilYT7Ow5s",
							},
})


export default instance;
// instance.get("/movie/top_rated");
// https: