// Create a form for posting jobs
import React, { useState, useRef } from 'react';
import { Grid, Paper, TextField, Button, Box, Chip } from '@mui/material'

const JobPostingForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [salary, setSalary] = useState("");
    const [skills, setSkills] = useState("");
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const [job, setJob] = useState(null)

    const handleSkillsTag = (e) => {
        if (e.key === 'Enter') {
            setSkills([...skills, e.target.value])
            e.target.value = ''
        }
        console.log("Skills: ", skills)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send job information to backend
        // JobPostingController.createJobPosting({title, description, location, salary, skills}).then((res) => {
        //     if(res.status == 200){
        //         setSuccess(true);
        //         setJob(res);
        //     }else{
        //         setError(true);
        //     }
        // })
    };

    return (
        <Grid sx={{overflowY: "scroll"}}>
            <Paper
                variant="outlined"
                sx={{ overflowY: "scroll", border: "3px solid black", backgroundColor: "#f3f1f1", textAlign:"center", padding: 7, borderRadius: 2, borderColor: "#91a4e8", height: 325, width: 280, margin: "100px auto"}}
            >
                <Grid align='center'>
                    <h2>Post a Job</h2>
                </Grid>
                <form onSubmit={handleSubmit}>
                    <TextField label='Title' placeholder='Enter title' fullWidth required onChange={(e) => setTitle(e.target.value)}/>
                    <TextField label='Description' placeholder='Enter description' fullWidth required onChange={(e) => setDescription(e.target.value)}/>
                    <TextField label='Location' placeholder='Enter location' fullWidth required onChange={(e) => setLocation(e.target.value)}/>
                    <TextField label='Salary' placeholder='Enter salary' fullWidth required onChange={(e) => setSalary(e.target.value)}/>
                    <TextField label='Skills' placeholder='Enter skills' fullWidth required onKeyDown={(e) => handleSkillsTag(e)}/>
                    {/* For every skill entered, create a deletable chip */}
                    {/* Map the skills to chips */}
                    {skills.map((skill) => (
                        <Chip
                            label={skill}
                            onDelete={() => setSkills(skills.filter((s) => s !== skill))}
                            sx={{ margin: 1 }}
                        />
                    ))}

                    <Button type='submit' color='primary' variant="contained" sx={{ mt: 3, mb: 2 }}>Submit</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default JobPostingForm;