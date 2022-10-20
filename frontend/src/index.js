import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/App";
import ProfilePage from './components/profile/ProfilePage';
import JobDetailPage from './pages/JobDetailPage';
import JobSeekerForm from "./pages/CreateProfilePage";
import RecruiterForm from "./pages/CreateProfilePage";
import { JobBoard } from "./components/JobPostings/JobBoard";

import { useNavigate } from "react-router-dom";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";

import Auth from "./components/app/Auth";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";

import { BrowserRouter, Route, Routes } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/form" element={<RecruiterForm />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/job" element={<JobDetailPage />} />
                <Route path="/jobs" element={<JobBoard limit={false} />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
