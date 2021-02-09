import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Map } from "./components/Map";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
    <Router>
        <Map />
    </Router>, 
    document.getElementById("root"));
