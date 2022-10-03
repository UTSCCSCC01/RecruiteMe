import { Grid, Paper, TextField, Button} from '@mui/material'

export default function JobSeekerForm() {
    return (
        <Grid>
            <Paper elevation={0} 
                sx={{textAlign:"center", border: 2, borderColor: "#91a4e8", paddingLeft: 7, paddingRight: 7, paddingTop: 0, paddingBottom: 0, borderRadius: 2, height: 570, width: 800, margin: "100px auto"}}
            >
                <Grid align='center' fontSize={19}>
                    <h2>Profile Details</h2>
                </Grid>
                <div>
                    <TextField 
                        label='First Name' 
                        placeholder='Enter First Name'
                        fullWidth
                        sx={{left:80, width: 270, paddingBottom: "1em", paddingRight: "1em"}}
                        InputProps={{ sx: {backgroundColor: "#f3f1f1"  } }}

                        required
                    />
                    <TextField 
                        label='Last Name' 
                        placeholder='Enter Last Name' 
                        sx={{left:80, width: 270, paddingBottom: "1em"}} 
                        InputProps={{ sx: {backgroundColor: "#f3f1f1"  } }}

                        fullWidth 
                        required
                    />
                </div>
                <div>
                 <TextField 
                    label='Email' 
                    placeholder='Enter Email' 
                    sx={{left: 200, paddingBottom: "1em" }} 
                    InputProps={{ sx: {width: 560, backgroundColor: "#f3f1f1"  } }}
                    fullWidth 
                    required
                />
                </div>
                <div>
                 <TextField 
                    label='Phone Number' 
                    placeholder='Enter Phone Number' 
                    sx={{left: 200, paddingBottom: "2em" }} 
                    InputProps={{ sx: {width: 560, height: 50, backgroundColor: "#f3f1f1"   } }}
                    fullWidth 
                    required
                />
                </div>
                <div>
                 <TextField 
                    label='Short Bio' 
                    placeholder='Enter Bio' 
                    sx={{borderRadius: 3, left: 0, paddingBottom: "1em", }} 
                    InputProps={{ sx: { height: 125, width: 760, backgroundColor: "#f3f1f1" } }}
                    fullWidth 
                    required
                />
                </div>
                <div paddingBottom="100">
                <Button type='Resume' color='primary' variant='filled'  sx={{ borderRadius: 3, right: 250, width: 300,  backgroundColor: "#f3f1f1 ", border: 2, borderColor: "#91a4e8", color: "#91a4e8",textTransform: 'none', fontSize:19}}  fullWidth>Upload Resume</Button>
                </div>
                <div >
                <Button type='submit' color='secondary' variant='filled'  sx={{borderRadius: 3, left: 295, width: 130, height: 45, backgroundColor: "#91a4e8", textTransform: 'none', color: "#FFFFFF", fontSize:19}} fullWidth>Save</Button>
                </div>
            </Paper>
        </Grid>
    );
}