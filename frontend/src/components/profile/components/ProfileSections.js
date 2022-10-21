import { Box, Button, Typography } from "@mui/material";
import "./Profile.css";
import JobSeekerController from "../../../controller/JobSeekerController";
import * as React from "react";

export const BioSection = (props) => {
    return (
        <Box mt={3} mb={4} id={"profile-bio"}>
            <Typography variant="h4" mb={1}>
                About Me
            </Typography>
            <Typography variant="body1" mb={2}>
                {props.bio}
            </Typography>
        </Box>
    );
};

const WorkExperienceTile = (props) => {
    return (
        <Box my={2}>{console.log(props)}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 0px",
                }}
            >
                <Box sx={{ display: "flex" }}>
                    <Typography variant="h6" fontWeight={"500"}>
                        {props.jobTitle}
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{ color: "gray", paddingLeft: "8px" }}
                    >
                        • {props.company}
                    </Typography>
                </Box>

                <Typography
                    sx={{
                        color: "#898989",
                        fontStyle: "italic",
                        fontSize: "18px",
                    }}
                >
                    {props.startDate} - {props.endDate}
                </Typography>
            </Box>

            <Typography variant="body1">{props.description}</Typography>
        </Box>
    );
};

export const WorkExperienceSection = (props) => {
    return (
        <Box mt={3} mb={4}>
            <Typography variant="h4" mb={1}>
                Work Experience
            </Typography>
            {props.workExperience?.map((workExp) => (
                <WorkExperienceTile
                    key={workExp._id}
                    company={workExp.company}
                    jobTitle={workExp.jobTitle}
                    startDate={workExp.startDate}
                    endDate={workExp.endDate}
                    description={workExp.description}
                />
            ))}
        </Box>
    );
};

const EducationTile = (props) => {
    return (
        <Box my={2}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 0px",
                }}
            >
                <Box sx={{ display: "flex" }}>
                    <Typography variant="h6" fontWeight={"500"}>
                        {props.school}
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{ color: "gray", paddingLeft: "8px" }}
                    >
                        • {props.program}
                    </Typography>
                </Box>

                <Typography
                    sx={{
                        color: "#898989",
                        fontStyle: "italic",
                        fontSize: "18px",
                    }}
                >
                    {props.gradDate}
                </Typography>
            </Box>
            <Typography variant="body1">{props.description}</Typography>
        </Box>
    );
};

export const EducationSection = (props) => {
    return (
        <Box mt={3} mb={4}>
            <Typography variant="h4" mb={1}>
                Education
            </Typography>
            {props.education?.map((edu) => (
                <EducationTile
                    key={edu._id}
                    school={edu.school}
                    program={edu.program}
                    gradDate={edu.gradDate}
                    description={edu.description}
                />
            ))}
        </Box>
    );
};

export const SkillsSection = (props) => {
    return (
        <Box mt={3} mb={4}>
            <Typography variant="h4" mb={1}>
                Skills
            </Typography>
            {props.skills && (
                <ul>
                    {props.skills?.map((skill) => (
                        <li key={skill} className="skill-item">
                            {skill}
                        </li>
                    ))}
                </ul>
            )}
        </Box>
    );
};

export const ResumeSection = (props) => {
    const [showResume, setShowResume] = React.useState(false);

    const handleDownload= () => {
        props.resume.click();
    };
    return (
        <Box mt={3} mb={4}>
            <Typography variant="h4" mb={1} mr={2}>
                Resume
            </Typography>

            <Typography variant="body1">
                Check out my resume linked below.
            </Typography>
            <Box sx={{ display: "flex" }} my={2}>
                <Button
                    variant={"outlined"}
                    sx={{
                        color: "#91A4E8",
                        border: "#91A4E8 1px solid",
                        height: "30px",
                    }}
                    onClick={handleDownload}
                    download
                >
                    Download
                </Button>
                {showResume ? (
                    <Button
                        variant={"outlined"}
                        onClick={() => setShowResume(false)}
                        sx={{
                            color: "#91A4E8",
                            border: "#91A4E8 1px solid",
                            height: "30px",
                            margin: "0px 10px",
                        }}
                    >
                        Hide
                    </Button>
                ) : (
                    <Button
                        variant={"outlined"}
                        onClick={() => setShowResume(true)}
                        sx={{
                            color: "#91A4E8",
                            border: "#91A4E8 1px solid",
                            height: "30px",
                            margin: "0px 10px",
                        }}
                    >
                        View
                    </Button>
                )}
            </Box>

            {showResume && (
                <iframe
                    style={{
                        marginTop: "20px",
                        width: "100%",
                        height: "900px",
                    }}
                    src={`data:application/pdf;base64,${props.viewResume}`} //TODO: display real resume
                    type="application/pdf"
                    title="title"
                />
            )}
        </Box>
    );
};
