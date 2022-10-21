import React from "react";
import { Box, Grid, Paper, IconButton, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { JobBoard } from "../JobPostings/JobBoard";
function ApplicationTracker() {
    const mainStyle = {
        display: "flex",
        height: "100%",
    };
    return (
        <div style={mainStyle} id="apptracker">
            <Paper
                sx={{
                    width: "25%",
                    padding: "2rem",
                    paddingTop: "10vh",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "whitesmoke",
                }}
            >
                <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold" }}
                    gutterBottom
                >
                    My Applications
                </Typography>
                <Box
                    sx={{
                        justifyContent: "flex-end",
                        alignItems: "flex-end",
                        height: "100%",
                        display: "flex",
                    }}
                >
                    <IconButton
                        sx={{
                            color: "#91A4E8",
                        }}
                        onClick={() => {
                            /**reroute to applications */
                        }}
                    >
                        <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: "bold" }}
                        >
                            View More
                        </Typography>
                        <ArrowRightAltIcon />
                    </IconButton>
                </Box>
            </Paper>
            <Box width={"75%"} height={"100vh"} overflow={"scroll"}>
                <JobBoard limit={true} customWidth={"90%"} />
            </Box>
        </div>
    );
}

export default ApplicationTracker;
