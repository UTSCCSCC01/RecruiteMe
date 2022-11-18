import React from "react";
import { useEffect } from "react";
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { status2text } from "./StatusTypes";
import JobSeekerController from "../../controller/JobSeekerController";
import RecruiterController from "../../controller/RecruiterController";
function ApplicantStatus({ applicant }) {
    const [status, setStatus] = React.useState("");
    const [showOA, setShowOA] = React.useState(false);
    const [oaLink, setOALink] = React.useState("");
    const [showSent, setShowSent] = React.useState(false);
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
            console.log(applicant.post[0]);
            setStatus(applicant.post[0].status);
        }
    }, [applicant]);

    function handleChange(event) {
        setStatus(event.target.value);
        console.log(event.target.value);
        if (event.target.value == 4) setShowOA(true);
        else setShowOA(false);
        JobSeekerController.updateApplicationStatus({
            uid: applicant.uid,
            postId: applicant.post[0].postId,
            status: parseInt(event.target.value),
        });
    }

    const sendOA = () => {
        console.log("send OA");
        RecruiterController.sendAssessment({
            uid: applicant.uid,
            postId: applicant.post[0].postId,
            assesment_link: oaLink,
        }).then(() => {
            setShowSent(true);
        });
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 250 }}>
            <InputLabel id="status-label" shrink disableAnimation>
                Change Status
            </InputLabel>
            <Box display={"flex"} alignItems={"center"} height="55px">
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
                    <MenuItem value={4}>{status2text[4]}</MenuItem>
                    <MenuItem value={5}>{status2text[5]}</MenuItem>
                </Select>
                {status === 5 && 
                <Button
                variant="contained"
                href={applicant.post[0].assesmentLink}
                target="_blank"
                sx={{
                    height: "53px",
                    fontSize: "16px",
                    left: 10, 
                    color: "white",
                    backgroundColor: "#91A4E8",
                    textTransform: 'none',
                }}
            >
                Open Completed Assessment
            </Button>}
                {showOA && (
                    <Box pl={2} display={"flex"} alignItems={"center"}>
                        <TextField
                            id="outlined-basic"
                            label="OA Link"
                            variant="outlined"
                            value={oaLink}
                            onChange={(e) => {
                                setOALink(e.target.value);
                                console.log(e.target.value);
                            }}
                            sx={{
                                height: "55px",
                                backgroundColor: "white",
                                borderRadius: "5px",
                            }}
                        />
                        <Button
                            variant="contained"
                            endIcon={<SendIcon />}
                            onClick={sendOA}
                            disabled={oaLink.length === 0}
                            sx={{
                                height: "53px",
                                fontSize: "16px",
                                color: "white",
                                fontWeight: "bold",
                                backgroundColor: "#91A4E8",
                            }}
                        >
                            Send
                        </Button>
                    </Box>
                )}
                {showSent && <Box pl={2}>Sent!</Box>}
            </Box>
        </FormControl>
    );
}

export default ApplicantStatus;
