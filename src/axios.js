require (dotenv).config()

import axios from "axios";
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
headers: {
								accept: "application/json",
								Authorization:
									Process.env.Token
							},
})


export default instance;
// instance.get("/movie/top_rated");
// https: