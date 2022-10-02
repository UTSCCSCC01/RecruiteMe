import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/App";
import Landing from "./components/Landing/Landing";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Landing />
    </React.StrictMode>
);
