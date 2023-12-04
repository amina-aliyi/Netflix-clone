import axios from "axios";
import dotenv from "dotenv";
// require("dotenv").config();
dotenv.config();
const instance = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	headers: {
		accept: "application/json",
		Authorization: process.env.Token,
	},
});

export default instance;
// instance.get("/movie/top_rated");
// https:
