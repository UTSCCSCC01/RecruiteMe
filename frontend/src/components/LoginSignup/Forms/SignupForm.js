import { Grid, Paper, TextField, Button, Divider, Alert } from '@mui/material'
import { FormControl, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import UserController from "../../../controller/UserController";


export default function SignupForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [reenteredPassword, setReenteredPassword] = useState("");
    const [recruiter, setRecruiter] = useState(false);
    const [error, setError] = useState(false)

    const handleRegister = (e) => {
        e.preventDefault();
        // Check if passwords match
        if (password !== reenteredPassword) {
            alert("Passwords do not match");
            return;
        }
        // Send email and password to backend using post request
        UserController.register({email:email, password:password, recruiter: recruiter}).then((res) => {
            if(res.status == 201){
                navigate('/login')
            }
        else{
            setError(true);

        }});
    };
    const handleSignin = (e) => {
        e.preventDefault();
        navigate('/login')
    };
    return (
        <Grid>
            <Paper 
                variant="outlined"
                sx={{border: "3px solid black", backgroundColor: "#f3f1f1", textAlign:"center", padding: 7, borderRadius: 2, borderColor: "#91a4e8", height: 425, width: 280, margin: "100px auto"}}
            >
                <Grid align='center'>
                    <h2>Register</h2>
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
                <TextField 
                    label='Re-enter Password' 
                    placeholder='Re-enter password' 
                    type='password' 
                    sx={{ paddingBottom: "0.5em" }} 
                    fullWidth 
                    required
                    onChange={(e) => setReenteredPassword(e.target.value)}
                />
                <FormControl>
                    <RadioGroup
                        aria-labelledby="radio-buttons-group-label"
                        name="radio-buttons-group"
                        // Make the buttons side by side
                        sx={{display: "flex", flexDirection: "row"}}
                    >
                        <FormControlLabel value="jobseeker" onClick={() => setRecruiter(false)} control={<Radio />} label="Job Seeker" />
                        <FormControlLabel value="recruiter" onClick={() => setRecruiter(true)} control={<Radio />} label="Recruiter" />
                    </RadioGroup>
                </FormControl>

                <Button 
                    type='submit' 
                    color='primary' 
                    variant='contained' 
                    onClick={handleRegister} 
                    sx={{ backgroundColor: "#91a4e8", textTransform: 'none', color: "#FFFFFF" }}
                    fullWidth
                >
                    Sign Up
                </Button>
                {error ? 
                <Alert sx={{ width:250}} severity="error">Sign up failed</Alert>
                :null}                <Divider textAlign='center' sx={{paddingTop: "1em", paddingBottom: "1em"}}>or</Divider>
                <Button type='button' color='secondary' variant='contained' fullWidth sx={{ textTransform: 'none'}} onClick={handleSignin}>Log In</Button>
            </Paper>
        </Grid>
    );
}