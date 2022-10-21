import React, { useState } from "react";
import { Grid, Paper, TextField, Button, Divider, Alert } from '@mui/material'
import UserController from "../../controller/UserController";
import RecruiterController from "../../controller/RecruiterController";
import JobSeekerController from "../../controller/JobSeekerController";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const navigate = useNavigate();

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = useState(false)
    const handleLogin = (e) => {
        e.preventDefault();
        // Send email and password to backend using post request
        UserController.login({username:email, password:password}).then((res) => {
            if(res.status == 200){
                UserController.getCurrent().then((res) => {
                    if(res.recruiter){
                        RecruiterController.getRecruiter().then((res) => {
                            if(res.length == 0){
                                navigate('/form')
                            }else{
                                navigate('/dashboard')
                            }
                        });
                    }
                    else{
                        JobSeekerController.getJobSeeker().then((res) => {
                            if(res.length == 0){
                                navigate('/form')
                            }else{
                                navigate('/dashboard')
                            }
                    });
                }

                });
            }else{
                setError(true);
            }
        })
    };
    const handleSignup = (e) => {
        e.preventDefault();
        // Send email and password to backend using post request
        navigate('/signup')
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
                    Log In
                </Button>
                {error ? 
                <Alert sx={{ width:250}} severity="error">Login failed</Alert>
                :null}
                <Divider textAlign='center' sx={{paddingTop: "1em", paddingBottom: "1em"}}>or</Divider>
                <Button type='button' color='secondary' variant='contained' fullWidth sx={{ textTransform: 'none'}} onClick={handleSignup}>Sign Up </Button>
            </Paper>
        </Grid>
    );
}