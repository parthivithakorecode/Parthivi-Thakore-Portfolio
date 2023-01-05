import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Homepage from "./components/Homepage";
import "./style/css/reset.css";
import "./style/css/common.css";
const root = ReactDOM.createRoot(document.getElementById("main-wrapper"));
root.render(
	<React.StrictMode>
		<Homepage />
	</React.StrictMode>
);
reportWebVitals();
