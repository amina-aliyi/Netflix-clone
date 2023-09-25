import React from "react";
import "./App.css";
import requests from "./requests";
import Row from "./Row";

import Banner from "./Banner";
import Nav from "./Nav";

function App() {
	return (
    <div className="App">
      <Nav/>
      <Banner/>
			<Row
				title=" Netflix Originals"
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow
			/>
			<Row title=" Trending Now" fetchUrl={requests.fetchTrending} />
			<Row title=" Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Row title="Documentary Movies" fetchUrl={requests.fetchDocumentaries} />
		</div>
	);
}

export default App;
