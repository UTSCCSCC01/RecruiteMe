import React from "react";
import "./App.css";
import UserController from "../../controller/UserController";
import JobSeekerController from "../../controller/JobSeekerController";
import Button from "@mui/material/Button";

function App() {
    const [logged, setLogged] = React.useState();
    const [user, setUser] = React.useState(null);

    const handleLogin = async () => {
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
                Get Profile
            </Button>
        </div>
    );
}

export default App;
