import { Grid, Paper, TextField, Button, Divider } from '@mui/material'

export default function LoginForm() {
    return (
        <Grid>
            <Paper elevation={10} 
                sx={{textAlign:"center", padding: 7, borderRadius: 2, height: 325, width: 280, margin: "100px auto"}}
            >
                <Grid align='center'>
                    <h2>Sign In</h2>
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
                <Button type='submit' color='primary' variant='contained' fullWidth>Sign in</Button>
                <Divider textAlign='center' sx={{paddingTop: "1em", paddingBottom: "1em"}}>or</Divider>
                <Button type='submit' color='secondary' variant='contained' fullWidth>Register</Button>
            </Paper>
        </Grid>
    );
}