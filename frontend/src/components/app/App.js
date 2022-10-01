import React from "react";
import "./App.css";
import UserController from "../../controller/UserController";
import Button from "@mui/material/Button";

function App() {
    const [user, setUser] = React.useState(null);

    const handleClick = async () => {
        UserController.getUser().then((res) => setUser(res));
    };
    return (
        <div className="App">
            <Button
                style={{ width: "500px", height: "100px", fontSize: "60px" }}
                onClick={handleClick}
            >
                Get User
            </Button>

            {user && <div>{JSON.stringify(user)}</div>}
        </div>
    );
}

export default App;
