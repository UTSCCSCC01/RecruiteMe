import React from "react";
import { useEffect } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { status2text } from "./StatusTypes";
import JobSeekerController from "../../controller/JobSeekerController";
function ApplicantStatus({ applicant }) {
    const [status, setStatus] = React.useState("");
    /*
    Since applicant is empty on first render, this
    waits for applicant to change and inits the
    Current Status of the job applicant
    Instead of passing in applicant, pass in individual
    props for uid, postId, status
    */
    useEffect(() => {
        console.log(applicant);
        if (Object.keys(applicant).length !== 0) {
            setStatus(applicant.post[0].status);
        }
    }, [applicant]);

    function handleChange(event) {
        setStatus(event.target.value);
        JobSeekerController.updateApplicationStatus({
            uid: applicant.uid,
            postId: applicant.post[0].postId,
            status: parseInt(event.target.value)
        });
    }

    return (
        <FormControl sx={{ m: 1, minWidth: 250 }}>
            <InputLabel id="status-label" shrink disableAnimation>
                Change Status
            </InputLabel>
            <Select
                labelId="status-label"
                id="status-select"
                value={status}
                label="Change Status"
                onChange={handleChange}
                notched
            >
                <MenuItem value={0}>{status2text[0]}</MenuItem>
                <MenuItem value={1}>{status2text[1]}</MenuItem>
                <MenuItem value={2}>{status2text[2]}</MenuItem>
                <MenuItem value={3}>{status2text[3]}</MenuItem>
            </Select>
        </FormControl>
    );
}

export default ApplicantStatus;
