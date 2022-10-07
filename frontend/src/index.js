import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/App";
import ProfilePage from './components/profile/ProfilePage';
import JobSeekerForm from './pages/CreateProfilePage';

import { useNavigate } from "react-router-dom";
import Login from "./components/LoginSignup/Pages/LoginPage"
import Signup from "./components/LoginSignup/Pages/SignupPage"
import Auth from "./components/app/Auth"
import Landing from "./pages/Landing";

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
            <Route path="/" element={<Landing />} />
            <Route path="/form" element={<JobSeekerForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
