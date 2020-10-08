import React from "react";
import rain from "./icons/rain.png";
import "./App.css";

function App() {
	return (
		<div className="container">
			<p>WED</p>
			<img src={rain} />
			<p>44°</p>
		</div>
	);
}

export default App;
