import React from "react";
import "./App.css";
import UserController from "../../controller/UserController";
import JobSeekerController from "../../controller/JobSeekerController";
import Button from "@mui/material/Button";
import JobSeekerFormPage from '../../pages/JobSeekerFromPage';
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";
function App() {
    const [logged, setLogged] = React.useState();
    const [user, setUser] = React.useState(null);

    const handleLogin = async () => {
        UserController.login({username:'test11mail.com', password: 'lol1'}).then(res => {if (res.status == 200){setLogged(true);}});
    };
    const handleLogout = async () => {
        UserController.logout({}).then(res => {if(res.status == 200){setLogged(false); console.log(res.body);}});
        
    };
    const handleClick = async () => {
        JobSeekerController.getJobSeeker().then(res=> setUser(res));
    };
    return (
        <div className="App">
            <Button
                style={{ width: "500px", height: "100px", fontSize: "60px" }}
                onClick={handleLogin}
            >
                Log In
            </Button>

            <Button
                style={{ width: "500px", height: "100px", fontSize: "60px" }}
                onClick={handleLogout}
            >
                Log Out
            </Button>

            <div>{logged == null ? '' : logged ? 'Logged In': 'Not Logged In'}</div>
            <Button
                style={{ width: "500px", height: "100px", fontSize: "60px" }}
                onClick={handleClick}
            >
                Get Profile
            </Button>
            <Router>
                <Routes>
                    <Route path="/create" element={<JobSeekerFormPage />} />
                </Routes>
            </Router>
            {user && <div>{(JSON.stringify(user))}</div>}
        </div>
    );
}

export default App;
