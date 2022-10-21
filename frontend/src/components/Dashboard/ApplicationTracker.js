import React from "react";
import { Box, Grid, Paper, IconButton, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import { useEffect, useState } from "react";
import JobSeekerController from "../../controller/JobSeekerController";
import PostController from "../../controller/PostController";
import TrackerCard from "./TrackerCard";
import { JobBoard } from "../JobPostings/JobBoard";
function ApplicationTracker() {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    let ignore = false;
    JobSeekerController.getApplications().then((res) => {
      let postIDs = res.slice(1, 5); // get first 4 applications

      postIDs.forEach((val, i, arr) => {
        PostController.getPost(val.postId).then((res) => {
          if (!ignore)
            setPostData((postData) => [
              ...postData,
              { status: val.status, data: res },
            ]);
        });
      });
    });
    return () => {
      ignore = true;
    };
  }, []);

  // useEffect(() => {
  //   console.log(postData);
  // }, [postData]);

  return (
    <div style={{ height: "100%", display: "flex" }} id="apptracker">
      <Paper
        sx={{
          width: "300px",
          padding: "2rem",
          paddingTop: "120px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "whitesmoke",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
          My Applications
        </Typography>

        <Grid
          container
          direction="row"
          justifyContent="center"
          spacing={2}
        >
          {postData.map((post) => {
            return (
              <Grid item xs={12} key={post.data._id}>
                <TrackerCard post={post} />
              </Grid>
            );
          })}
        </Grid>

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
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
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
