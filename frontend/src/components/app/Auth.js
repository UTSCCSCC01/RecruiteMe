import React from "react";
import UserController from "../../controller/UserController";
import JobSeekerController from "../../controller/JobSeekerController";
import Button from "@mui/material/Button";
import ProfilePage from '../profile/ProfilePage';
import { useNavigate } from "react-router-dom";
import Auth from "./Auth"

import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";

export default function (props) {
    const navigate = useNavigate();

    const [logged, setLogged] = React.useState();
    const [user, setUser] = React.useState(null);

    const handleLogin = async () => {
        UserController.login({ username: 'testemail0@gmail.com', password: 'test1234' }).then(res => { if (res.status == 200) { setLogged(true); } });
    };
    const handleLogout = async () => {
        UserController.logout({}).then((res) => {
            if (res.status == 200) {
                setLogged(false);
                console.log(res.body);
            }
        });
    };
    const handleClick = () => {
        navigate("/profile");
    };
    return ( 
        <div >
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

            <div>
                {logged == null ? "" : logged ? "Logged In" : "Not Logged In"}
            </div>
            <Button
                style={{ width: "500px", height: "100px", fontSize: "60px" }}
                onClick={handleClick}
            >
                Get Profile
            </Button>

            {user && <div>{(JSON.stringify(user))}</div>}

        </div>
    );
}