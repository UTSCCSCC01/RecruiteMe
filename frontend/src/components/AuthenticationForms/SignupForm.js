import { Grid, Paper, TextField, Button, Divider } from '@mui/material'
import { FormControl, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import { useState } from 'react';
import AuthenticationController from "../../controller/AuthenticationController";


export default function SignupForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [reenteredPassword, setReenteredPassword] = useState("");
    const [recruiter, setRecruiter] = useState(false);


    const handleRegister = (e) => {
        e.preventDefault();
        // Check if passwords match
        if (password !== reenteredPassword) {
            alert("Passwords do not match");
            return;
        }
        // Send email and password to backend using post request
        AuthenticationController.register(email, password, recruiter).then((res) => console.log(res));
        
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
                <Divider textAlign='center' sx={{paddingTop: "1em", paddingBottom: "1em"}}>or</Divider>
                <Button type='submit' color='secondary' variant='contained' fullWidth>Sign In</Button>
            </Paper>
        </Grid>
    );
}