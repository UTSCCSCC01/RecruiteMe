import React from 'react';
import { Grid, Paper, TextField, Button } from '@mui/material'

export default function JobSeekerForm() {

    const ResumeInput = React.useRef(null);
    const PictureInput = React.useRef(null);


    const handleResumeClick = event => {
        ResumeInput.current.click();
    };
    const handlePictureClick = event => {
        PictureInput.current.click();
    };

    const handleResumeChange = event => {
        const resumeUploaded = event.target.files[0];
        console.log(resumeUploaded)
        console.log('resume uploaded')
    };
    const handlePictureChange = event => {
        const pictureUploaded = event.target.files[0];
        console.log(pictureUploaded)
        console.log('picture uploaded')
    };

    return (
        <Grid>
            <Paper elevation={0}
                sx={{ textAlign: "center", border: 2, borderColor: "#91a4e8", paddingLeft: 7, paddingRight: 7, paddingTop: 0, paddingBottom: 0, borderRadius: 2, height: 570, width: 800, margin: "100px auto" }}
            >
                <Grid align='center' fontSize={19}>
                    <h2>Profile Details</h2>
                </Grid>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                        type="file"
                        ref={PictureInput}
                        onChange={handlePictureChange}
                        style={{ display: 'none' }}
                    />
                    <img style={{ width: 282 / 2, height: 319 / 2 }} src={require('./JobSeekerFormImageUpload.png') } onClick={() => handlePictureClick()}/>
                    <div>
                        <TextField
                            label='First Name'
                            placeholder='Enter First Name'
                            fullWidth
                            sx={{ left: 10, width: 270, paddingBottom: "1em", paddingRight: "1em" }}
                            InputProps={{ sx: { backgroundColor: "#f3f1f1" } }}

                            required
                        />
                        <TextField
                            label='Last Name'
                            placeholder='Enter Last Name'
                            sx={{ left: 10, width: 270, paddingBottom: "1em" }}
                            InputProps={{ sx: { backgroundColor: "#f3f1f1" } }}

                            fullWidth
                            required
                        />
                        <TextField
                            label='Email'
                            placeholder='Enter Email'
                            sx={{ left: 60, paddingBottom: "1em" }}
                            InputProps={{ sx: { width: 560, backgroundColor: "#f3f1f1" } }}
                            fullWidth
                            required
                        />
                        <TextField
                            label='Phone Number'
                            placeholder='Enter Phone Number'
                            sx={{ left: 60, paddingBottom: "2em" }}
                            InputProps={{ sx: { width: 560, height: 50, backgroundColor: "#f3f1f1" } }}
                            fullWidth
                            required
                        />
                    </div>
                </div>
                <div>
                    <TextField
                        label='Short Bio'
                        placeholder='Enter Bio'
                        sx={{ borderRadius: 3, left: 0, paddingBottom: "1em", }}
                        InputProps={{ sx: { height: 125, width: 760, backgroundColor: "#f3f1f1" } }}
                        fullWidth
                        multiline
                        rows={4}
                        required
                    />
                </div>
                <div paddingBottom="100">
                    <input
                        type="file"
                        ref={ResumeInput}
                        onChange={handleResumeChange}
                        style={{ display: 'none' }}
                    />
                    <Button type='Resume' color='primary' variant='filled' onClick={handleResumeClick} sx={{ borderRadius: 3, right: 250, width: 300, backgroundColor: "#f3f1f1 ", border: 2, borderColor: "#91a4e8", color: "#91a4e8", textTransform: 'none', fontSize: 19 }} fullWidth>Upload Resume</Button>
                </div>
                <div >
                    <Button type='submit' color='secondary' variant='filled' sx={{ borderRadius: 3, left: 295, width: 130, height: 45, backgroundColor: "#91a4e8", textTransform: 'none', color: "#FFFFFF", fontSize: 19 }} fullWidth>Save</Button>
                </div>
            </Paper>
        </Grid>
    );
}
