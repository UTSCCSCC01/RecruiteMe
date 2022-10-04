import { Grid, Paper, TextField, Button, Divider } from '@mui/material'
import { FormControl, RadioGroup, Radio, FormControlLabel } from '@mui/material';

export default function SignupForm() {
    
    return (
        <Grid>
            <Paper elevation={10} 
                sx={{textAlign:"center", padding: 7, borderRadius: 2, height: 475, width: 280, margin: "100px auto"}}
            >
                <Grid align='center'>
                    <h2>Register</h2>
                </Grid>
                <TextField 
                    label='Email' 
                    placeholder='Enter email'
                    fullWidth
                    sx={{ paddingBottom: "1em" }}
                    required
                />
                <TextField 
                    label='Password' 
                    placeholder='Enter password' 
                    type='password' 
                    sx={{ paddingBottom: "1em" }} 
                    fullWidth 
                    required
                />
                <TextField 
                    label='Re-enter Password' 
                    placeholder='Re-enter password' 
                    type='password' 
                    sx={{ paddingBottom: "1em" }} 
                    fullWidth 
                    required
                />
                <FormControl>
                    <RadioGroup
                        aria-labelledby="radio-buttons-group-label"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="jobseeker" control={<Radio />} label="Job Seeker" />
                        <FormControlLabel value="recruiter" control={<Radio />} label="Recruiter" />
                    </RadioGroup>
                </FormControl>
                <Button type='submit' color='primary' variant='contained' fullWidth>Sign Up</Button>
                <Divider textAlign='center' sx={{paddingTop: "1em", paddingBottom: "1em"}}>or</Divider>
                <Button type='submit' color='secondary' variant='contained' fullWidth>Sign In</Button>
            </Paper>
        </Grid>
    );
}