import React from "react";
import "./App.css";
import UserController from "../../controller/UserController";
import Button from "@mui/material/Button";
import { ProfilePage } from "../profile/ProfilePage";

function App() {
    const [logged, setLogged] = React.useState();
    const [user, setUser] = React.useState(null);

    const handleLogin = async () => {
        UserController.login({
            username: "test4@mail.com",
            password: "lol1",
        }).then((res) => {
            if (res.status == 200) {
                setLogged(true);
            }
        });
    };
    const handleLogout = async () => {
        UserController.logout({}).then((res) => {
            if (res.status == 200) {
                setLogged(false);
                console.log(res.body);
            }
        });
    };
    const handleClick = async () => {
        UserController.getCurrent().then((res) => setUser(res));
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

            <div>
                {logged == null ? "" : logged ? "Logged In" : "Not Logged In"}
            </div>
            <Button
                style={{ width: "500px", height: "100px", fontSize: "60px" }}
                onClick={handleClick}
            >
                Get User
            </Button>

            {user && <ProfilePage />}
        </div>
    );
}

export default App;
