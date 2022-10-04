import { Box, Button, Typography } from "@mui/material";
import "./Profile.css";
import resume from "./example-assets/resume-example.pdf";
import * as React from "react";

export const BioSection = (props) => {
    return (
        <Box mt={3} mb={4} id={"profile-bio"}>
            <Typography variant="h4" mb={1}>
                About Me
            </Typography>
            <Typography variant="body1" mb={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
            </Typography>
            <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
        </Box>
    );
};

const WorkExperienceTile = (props) => {
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
                        Job Title
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{ color: "gray", paddingLeft: "8px" }}
                    >
                        • Company
                    </Typography>
                </Box>

                <Typography
                    sx={{
                        color: "#898989",
                        fontStyle: "italic",
                        fontSize: "18px",
                    }}
                >
                    Jan 2021 - Mar 2022
                </Typography>
            </Box>

            <Typography variant="body1">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
            </Typography>
        </Box>
    );
};

export const WorkExperienceSection = (props) => {
    return (
        <Box mt={3} mb={4}>
            <Typography variant="h4" mb={1}>
                Work Experience
            </Typography>
            <WorkExperienceTile />
            <WorkExperienceTile />
            <WorkExperienceTile />
        </Box>
    );
};

export const SkillsSection = (props) => {
    return (
        <Box mt={3} mb={4}>
            <Typography variant="h4" mb={1}>
                Work Experience
            </Typography>
            <WorkExperienceTile />
            <WorkExperienceTile />
            <WorkExperienceTile />
        </Box>
    );
};

export const ResumeSection = (props) => {
    const [showResume, setShowResume] = React.useState(props.showResume);
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
                    href={resume}
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
                    src={resume}
                    type="application/pdf"
                    title="title"
                />
            )}
        </Box>
    );
};
