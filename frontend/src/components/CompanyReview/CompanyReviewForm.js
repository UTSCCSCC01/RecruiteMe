// Create a form for posting jobs
import React, { useState, number } from 'react';
import { Grid, Paper, TextField, Button, Chip, Rating, Typography } from '@mui/material'
import JobSeekerController from '../../controller/JobSeekerController';

const JobPostingForm = (props) => {
    const [position, setPosition] = useState("");
    const [review, setReview] = useState("");
    const [salary, setSalary] = useState(null);
    const [value, setValue] = React.useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const reviewBody = {
            companyId: '635ae860ce5914a300f65460',
            review: {
                position: position,
                review: review,
                salary: salary,
                rating: value
            }
        };
        JobSeekerController.addReview(reviewBody).then((res) => {
            console.log(res);
            if (res.status === 200) {
                props.close();
            }
            else {
                console.log("Error adding company review");
            }
        });
};

return (
    <Grid sx={{ overflowY: "scroll" }}>
        <Paper
            variant="outlined"
            sx={{ overflowY: "scroll", border: "3px solid black", backgroundColor: "#f3f1f1", textAlign: "center", padding: 7, borderRadius: 2, borderColor: "#91a4e8", height: 400, width: 700, margin: "100px auto" }}
        >
            <Grid align='center'>
                <h2>Leave a Company Review</h2>
            </Grid>
            <form>
                <Typography component="legend" sx={{ marginTop: 5, marginBottom: 1 }}>Overall Rating</Typography>
                <Rating
                    name="simple-controlled"
                    size='large'
                    value={value}
                    sx={{ marginBottom: 5 }}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
                <TextField label='Position' placeholder='Enter Position' fullWidth required sx={{ paddingBottom: "0.5em" }} onChange={(e) => setPosition(e.target.value)} />
                <TextField label='Review' placeholder='Enter Review' fullWidth required rows={4} multiline sx={{ paddingBottom: "0.5em" }} InputProps={{ sx: { height: 125, backgroundColor: "#f3f1f1" } }} onChange={(e) => setReview(e.target.value)} />
                <TextField label='Salary' placeholder='Enter Salary' required type='number' fullWidth sx={{ paddingBottom: "0.5em" }} onChange={(e) => setSalary(e.target.value)} />



                <Button type='submit' color='primary' variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleSubmit} >Submit</Button>
                <Button type='close' color='secondary' variant="contained" sx={{ mt: 3, mb: 2, marginLeft: "1em" }} onClick={props.close}>Cancel</Button>
            </form>
        </Paper>
    </Grid>
)
}

export default JobPostingForm;