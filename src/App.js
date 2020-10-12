import React from "react";

import "./App.css";

function App() {
	return (
		<div className="container">
			<h1>Simple Weather App</h1>
			<h3>Enter a city name</h3>
			<input className="searchbar" />
			<button className="submit-button">Submit</button>
		</div>
	);
}

export default App;
