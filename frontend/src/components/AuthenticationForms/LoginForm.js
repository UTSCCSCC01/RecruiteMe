import React from "react";
import { Grid, Paper, TextField, Button, Divider } from '@mui/material'
import AuthenticationController from "../../controller/AuthenticationController";

export default function LoginForm() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        // Send email and password to backend using post request
        AuthenticationController.login(email, password).then((res) => {
            console.log(res);
            let token = res.headers.authorization;
            console.log(token);
        });
    };

    return (
        <Grid>
            <Paper
                variant="outlined"
                sx={{ border: "3px solid black", backgroundColor: "#f3f1f1", textAlign:"center", padding: 7, borderRadius: 2, borderColor: "#91a4e8", height: 325, width: 280, margin: "100px auto"}}
            >
                <Grid align='center'>
                    <h2>Sign In</h2>
                </Grid>
                <TextField 
                    label='Email' 
                    placeholder='Enter email'
                    fullWidth
                    sx={{ paddingBottom: "0.5em" }}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField 
                    label='Password' 
                    placeholder='Enter password' 
                    type='password' 
                    sx={{ paddingBottom: "0.5em" }} 
                    fullWidth 
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button 
                    type='submit' 
                    sx={{ backgroundColor: "#91a4e8", textTransform: 'none', color: "#FFFFFF" }}
                    color='primary' 
                    variant='contained' 
                    onClick={handleLogin} 
                    fullWidth
                >
                    Sign in
                </Button>
                <Divider textAlign='center' sx={{paddingTop: "1em", paddingBottom: "1em"}}>or</Divider>
                <Button type='submit' color='secondary' variant='contained' fullWidth>Register</Button>
            </Paper>
        </Grid>
    );
}