import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/App";
import ProfilePage from './components/profile/ProfilePage';
import { useNavigate } from "react-router-dom";
import Auth from "./components/app/Auth"
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
