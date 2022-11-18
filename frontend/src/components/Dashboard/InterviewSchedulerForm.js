// Create a form for posting jobs
import React, { useState } from 'react';
import { Grid, Paper, TextField, Button, Chip, AddCircleIcon } from '@mui/material'
import RecruiterController from '../../controller/RecruiterController';
import PostController from '../../controller/PostController';


const InterviewSchedulerForm = (props) => {
    const [interviewSchedule, setInterviewSchedule] = useState([]);
    const [dateTime, setDateTime] = useState("");
    // if(props.dates != null && props.dates.length > 0){
    //     setInterviewSchedule([...props.dates]);
    // }
    //  Get the post using PostController once the component mounts
    React.useEffect(() => {
        PostController.getPost(props.postId).then((res) => {
            console.log(res);
            if (res) {
                setInterviewSchedule([...res.availableDates]);
            }
            else {
                console.log("Error getting post");
            }
        })
    }, []);
    

    const handleAddToInterviewSchedule = (e) => {

        setInterviewSchedule([...interviewSchedule, dateTime]);
        setDateTime("");
    }
    const handleSendInterviewSchedule = (e) => {
        // Use recruiter controller to send interview schedule to backend
        console.log("Sending interview schedule to backend");
        console.log(interviewSchedule);
        console.log("PROPS: ", props.postId)
        console.log("----");
        RecruiterController.updateInterviewData(
            {
                availableDates: interviewSchedule,
                postId: props.postId,
            }
        ).then((res, err) => {
            if (res) {
                props.close();
            }
            else {
                console.log("Error adding job post");
            }
        });
    }

    return (
        <Grid sx={{overflowY: "scroll"}}>
            <Paper
                variant="outlined"
                sx={{ overflowY: "scroll", border: "3px solid black", backgroundColor: "#f3f1f1", textAlign:"center", padding: 7, borderRadius: 2, borderColor: "#91a4e8", height: 300, width: 700, margin: "100px auto"}}
            >
                <Grid align='center'>
                    <h2>Select potential and time to schedule interview</h2>
                </Grid>
                <Grid align='center'>
                    <TextField
                        id="date"
                        label="Date-Time"
                        type="datetime-local"
                        sx={{ width: 300 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e) => setDateTime(e.target.value)}
                        value={dateTime}
                    />
                </Grid>
                <Grid align='center'>
                    <Button
                        variant="contained"
                        sx={{ marginTop: 2, width: 300 }}
                        onClick={handleAddToInterviewSchedule}
                    >
                        Add new date and time
                    </Button>
                </Grid>
                {/* map chips to show added dates */}
                {interviewSchedule.map((interview) => {
                    let date = new Date(interview);
                    let dateString = date.toDateString();
                    let timeString = date.toLocaleTimeString();
                    return (
                        <Grid>
                            <Chip
                                label={dateString + " " + timeString}
                                onDelete={() => {
                                    setInterviewSchedule(
                                        interviewSchedule.filter(
                                            (i) => 
                                                i !== interview
                                        )
                                    )
                                }}
                                sx={{ marginTop: 2, width: 250, marginLeft: 2 }}
                            />
                        </Grid>
                    )
                })}



                <Grid align='center'>
                    <Button
                        onClick={handleSendInterviewSchedule}
                        variant="contained"
                        sx={{ width: 300, marginTop: 2, backgroundColor: "#91a4e8", color: "white" }}
                    >
                        Send Interview Request
                    </Button>
                </Grid>
                {/* Cancel button */}
                <Grid align='center'>
                    <Button
                        variant="contained"
                        sx={{ width: 300, marginTop: 2, backgroundColor: "#91a4e8", color: "white" }}
                        onClick={props.close}
                    >
                        Cancel
                    </Button>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default InterviewSchedulerForm;