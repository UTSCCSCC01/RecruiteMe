import React, { useState, useRef } from 'react';
import { Grid, Paper, TextField, Button } from '@mui/material'
import JobSeekerController from "../../controller/JobSeekerController";

const JobSeekerForm = (props) => {
    const [profileFormValues, setProfileFormValues] = useState((props.profile && props.profile.length != 0) ? props.profile : [{ firstName: "", lastName: "", phoneNumber: "", age: 20, bio: "", currStatus: "asd",  education: [{school: "UTSC", program: "Computer Science", gradDate: "2024"}],}])
    const [workFormValues, setWorkFormValues] = useState((props.profile && props.profile.length != 0) ? props.profile[0].workExperience : [{ company: "", jobTitle: "", startDate: "", description: "" }])
    const notNewProfile = (props.profile && props.profile.length != 0)
    const [selectedPicture, setSelectedPicture] = useState();
    const [selectedPictureURL, setSelectedPictureURL] = useState();
    const [isPictureClicked, setIsPictureClicked] = useState(false);
    const [selectedResume, setSelectedResume] = useState();
    const [isResumeClicked, setIsResumeClicked] = useState(false);
    const ResumeInput = useRef(null);
    const PictureInput = useRef(null);

    const handleResumeClick = event => {
        ResumeInput.current.click();
    };
    const handlePictureClick = event => {
        PictureInput.current.click();
    };

    const handleResumeChange = event => {
        setSelectedResume(event.target.files[0]);
        setIsResumeClicked(true)
    };
    const handlePictureChange = event => {
        setSelectedPicture(event.target.files[0]);
        setSelectedPictureURL(URL.createObjectURL(event.target.files[0]))
        setIsPictureClicked(true)
    };
    let handleProfileChange = (event) => {
        let newProfileFormValues = [...profileFormValues];
        newProfileFormValues[0][event.target.name] = event.target.value;
        setProfileFormValues(newProfileFormValues);
    }
    let handleWorkChange = (i, e) => {
        let newWorkFormValues = [...workFormValues];
        newWorkFormValues[i][e.target.name] = e.target.value;
        setWorkFormValues(newWorkFormValues);

    }
    let addWorkFormFields = () => {
        setWorkFormValues([...workFormValues, { company: "", jobTitle: "", startDate: "", description: "" }])
    }
    let removeWorkFormFields = (i) => {
        let newWorkFormValues = [...workFormValues];
        newWorkFormValues.splice(i, 1);
        setWorkFormValues(newWorkFormValues)
    }
    let handleSubmit = (event) => {
        event.preventDefault()
        let body = profileFormValues
        delete body.workExperience;
        body[0].workExp = workFormValues
        if (notNewProfile) {
            JobSeekerController.updateJobSeeker(body[0]).then((res) => { if (!res.status) {props.close() } });
        } else {
            JobSeekerController.addJobSeeker(body[0]).then((res) => { props.close()});
        }
    }
    return (
        <Grid>
            <Paper elevation={0}
                sx={{ textAlign: "center", border: 2, borderColor: "#91a4e8", paddingLeft: 7, paddingRight: 1, paddingTop: 1, paddingBottom: 0, borderRadius: 2, height: 590, width: 820, margin: "100px auto" }}
            >
                <form onSubmit={handleSubmit}>
                    <div style={{ maxHeight: 450, overflow: 'auto', overflowX: 'hidden' }}>
                        <Grid align='center' fontSize={19}>
                            <h2>Profile Details</h2>
                        </Grid>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                ref={PictureInput}
                                type="file"
                                onChange={handlePictureChange}
                                style={{ display: 'none' }}
                            />
                            <img style={{ width: 282 / 2, height: 319 / 2 }} src={isPictureClicked ? selectedPictureURL : require('../../assets/JobSeekerFormImageUpload.png')} onClick={() => handlePictureClick()} />
                            <div>
                                <TextField
                                    label='First Name'
                                    placeholder='Enter First Name'
                                    fullWidth
                                    name='firstName'
                                    value={profileFormValues[0].firstName}
                                    sx={{ left: 8, width: 270, paddingBottom: "1em", paddingRight: "1em" }}
                                    InputProps={{ sx: { backgroundColor: "#f3f1f1" } }}
                                    onChange={e => handleProfileChange(e)}
                                    required
                                />
                                <TextField
                                    label='Last Name'
                                    placeholder='Enter Last Name'
                                    name='lastName'
                                    value={profileFormValues[0].lastName}
                                    sx={{ left: 8, width: 270, paddingBottom: "1em" }}
                                    InputProps={{ sx: { backgroundColor: "#f3f1f1" } }}
                                    onChange={e => handleProfileChange(e)}
                                    fullWidth
                                    required
                                />
                                <TextField
                                    label='Email'
                                    placeholder='Enter Email'
                                    name='email'
                                    value={props.user.email}
                                    disabled
                                    sx={{ left: 60, paddingBottom: "1em" }}
                                    InputProps={{ sx: { width: 560, backgroundColor: "#f3f1f1" } }}
                                    fullWidth
                                    required
                                />
                                <TextField
                                    label='Phone Number'
                                    placeholder='Enter Phone Number'
                                    name='phoneNumber'
                                    type="number"
                                    value={profileFormValues[0].phoneNumber}
                                    sx={{ left: 60, paddingBottom: "2em" }}
                                    InputProps={{ sx: { width: 560, height: 50, backgroundColor: "#f3f1f1" } }}
                                    onChange={e => handleProfileChange(e)}
                                    fullWidth
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <TextField
                                label='Short Bio'
                                placeholder='Enter Bio'
                                name='bio'
                                value={profileFormValues[0].bio}
                                sx={{ borderRadius: 3, left: 0, paddingBottom: "1em", }}
                                InputProps={{ sx: { height: 125, width: 760, backgroundColor: "#f3f1f1" } }}
                                onChange={e => handleProfileChange(e)}
                                fullWidth
                                multiline
                                rows={4}
                                required
                            />
                        </div>

                        <Grid align='center' fontSize={19}>
                            <h2>Work Experiences</h2>
                        </Grid>

                        {workFormValues.map((element, index) => (
                            <div className="form-inline" key={index} style={{ paddingBottom: 20 }}>
                                <TextField
                                    label='Company'
                                    placeholder='Enter Company Name'
                                    fullWidth
                                    name='company'
                                    value={workFormValues[index].company}
                                    sx={{ left: -25, width: 240, paddingBottom: "1em", paddingRight: "1em" }}
                                    InputProps={{ sx: { backgroundColor: "#f3f1f1" } }}
                                    onChange={e => handleWorkChange(index, e)}
                                    required
                                />
                                <TextField
                                    label='Job title'
                                    placeholder='Enter Job title'
                                    name='jobTitle'
                                    value={workFormValues[index].jobTitle}
                                    sx={{ left: -20, width: 240, paddingBottom: "1em" }}
                                    InputProps={{ sx: { backgroundColor: "#f3f1f1" } }}
                                    onChange={e => handleWorkChange(index, e)}
                                    required
                                />
                                <TextField
                                    label='Date'
                                    placeholder='Enter Job Date'
                                    name='startDate'
                                    value={workFormValues[index].startDate}
                                    sx={{ left: -1, width: 240, paddingBottom: "1em" }}
                                    InputProps={{ sx: { backgroundColor: "#f3f1f1" } }}
                                    onChange={e => handleWorkChange(index, e)}
                                    required
                                />
                                <TextField
                                    label='Description'
                                    placeholder='Enter Job Description'
                                    name='description'
                                    value={workFormValues[index].description}
                                    sx={{ borderRadius: 3, right: 13, paddingBottom: "1em", }}
                                    InputProps={{ sx: { height: 125, width: 760, backgroundColor: "#f3f1f1" } }}
                                    onChange={e => handleWorkChange(index, e)}
                                    multiline
                                    rows={4}
                                    required
                                />
                                {
                                    index ?
                                        <Button type="button" color='secondary' variant='filled' className="button remove" sx={{ backgroundColor: "#91a4e8", textTransform: 'none', color: "#FFFFFF", fontSize: 19, right: 340, marginBottom: 2 }} onClick={() => removeWorkFormFields(index)}>Remove</Button>
                                        : null
                                }
                            </div>
                        ))}
                        <div className="button-section">
                            <Button type="button" color='secondary' variant='filled' className="button add" sx={{ backgroundColor: "#91a4e8", textTransform: 'none', color: "#FFFFFF", fontSize: 19, right: 359, marginBottom: 2 }} onClick={() => addWorkFormFields()}>Add</Button>
                        </div>
                    </div>
                    <div style={{ paddingTop: 10 }}>
                        <input
                            type="file"
                            ref={ResumeInput}
                            onChange={handleResumeChange}
                            style={{ display: 'none' }}
                        />

                        <Button type='button' color='primary' variant='filled' onClick={handleResumeClick} sx={{ borderRadius: 3, right: 250, width: 300, backgroundColor: "#f3f1f1 ", border: 2, borderColor: "#91a4e8", color: "#91a4e8", textTransform: 'none', fontSize: 19 }} fullWidth>{isResumeClicked ? selectedResume.name + ' Uploaded!' : 'Upload Resume'}</Button>
                    </div>
                    <div >
                        <Button type='submit' color='secondary' variant='filled' sx={{ borderRadius: 3, left: 295, width: 130, height: 45, backgroundColor: "#91a4e8", textTransform: 'none', color: "#FFFFFF", fontSize: 19 }} fullWidth>Save</Button>
                    </div>
                </form>
            </Paper>
        </Grid>
    );
}
export default JobSeekerForm