import React from "react";
import rain from "./icons/rain.png";
import sunny from "./icons/sunny.png";

import "./App.css";

function App() {
	return (
		<div className="container">
			<div className="weather-box">
				<p>WED</p>
				<img src={sunny} alt="sunny" />
				<p>35°</p>
			</div>
			<div className="weather-box">
				<p>THU</p>
				<img src={sunny} alt="sunny" />
				<p>37°</p>
			</div>
			<div className="weather-box">
				<p>FRI</p>
				<img src={rain} alt="rainy" />
				<p>41°</p>
			</div>
			<div className="weather-box">
				<p>SAT</p>
				<img src={sunny} alt="sunny" />
				<p>44°</p>
			</div>
			<div className="weather-box">
				<p>SUN</p>
				<img src={rain} alt="rainy" />
				<p>39°</p>
			</div>
		</div>
	);
}

export default App;
