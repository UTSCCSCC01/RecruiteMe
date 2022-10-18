// Create a form for posting jobs
import React, { useState } from 'react';
import { Grid, Paper, TextField, Button, Chip } from '@mui/material'
import RecruiterController from '../../controller/RecruiterController';

const JobPostingForm = (props) => {
    const [role, setRole] = useState("");
    const [description, setDescription] = useState("");
    const [qualifications, setQualifications] = useState([]);
    const [deadline, setDeadline] = useState(null)


    const handleQualificationsTag = (e) => {
        if (e.key === 'Enter' && e.target.value !== '') {
            setQualifications([...qualifications, e.target.value])
            e.target.value = ''
        }
        console.log("Skills: ", qualifications)
    }

    const handleSubmit = (e) => {
        if (role === '' || description === '' || deadline === null) {
            return
        }
        e.preventDefault();
        // Send job information to backend
        // If successful, set success to true
        // If unsuccessful, set error to true
        console.log("Submitting job posting form");
        // Get the recruiter's company name
        RecruiterController.getRecruiter().then((res) => {
            console.log(res);
            const job = {
                companyName: res[0].company,
                role: role,
                description: description,
                qualification: qualifications,
                deadline: deadline,
            };

            RecruiterController.addJobPost(job).then((res) => {
                console.log(res);
                if (res.status === 200) {
                    props.close();
                }
                else {
                    console.log("Error adding job post");
                }
            })
        });
    };

    return (
        <Grid sx={{overflowY: "scroll"}}>
            <Paper
                variant="outlined"
                sx={{ overflowY: "scroll", border: "3px solid black", backgroundColor: "#f3f1f1", textAlign:"center", padding: 7, borderRadius: 2, borderColor: "#91a4e8", height: 300, width: 700, margin: "100px auto"}}
            >
                <Grid align='center'>
                    <h2>Post a Job</h2>
                </Grid>
                <form>
                    <TextField label='Role' placeholder='Enter role' fullWidth required sx={{ paddingBottom: "0.5em" }} onChange={(e) => setRole(e.target.value)}/>
                    <TextField label='Description' placeholder='Enter description' fullWidth required rows={4} multiline sx={{ paddingBottom: "0.5em" }} InputProps={{ sx: { height: 125, backgroundColor: "#f3f1f1" } }} onChange={(e) => setDescription(e.target.value)}/>
                    <TextField label='Qualifications' placeholder='Enter qualifiactions' fullWidth onKeyDown={(e) => handleQualificationsTag(e)}/>
                    {/* For every skill entered, create a deletable chip */}
                    {/* Map the skills to chips */}
                    <Grid
                        sx={{ paddingBottom: "0.5em" }}
                    >
                    {qualifications.map((qualification) => (
                        <Chip
                            label={qualification}
                            onDelete={() => setQualifications(qualifications.filter((q) => q !== qualification))}
                            sx={{ margin: 1 }}
                        />
                    ))}
                    </Grid>
                    {/* Add a date selector for deadline */}
                    <TextField
                        id="datetime-local"
                        label="Deadline"
                        type="datetime-local"
                        sx={{ paddingBottom: "0.5em" }}
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        required
                        onChange={(e) => setDeadline(e.target.value)}
                    />

                    
                    <Button type='submit' color='primary' variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleSubmit} >Submit</Button>
                    <Button type='close' color='secondary' variant="contained" sx={{ mt: 3, mb: 2, marginLeft: "1em" }} onClick={props.close}>Cancel</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default JobPostingForm;