import React from "react";
import { Box, Grid, Paper, IconButton, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import { useEffect, useState } from "react";
import JobSeekerController from "../../controller/JobSeekerController";
import PostController from "../../controller/PostController";
import TrackerCard from "./TrackerCard";
import { useNavigate } from "react-router-dom";
function ApplicationTracker() {
  const [postData, setPostData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    let ignore = false;
    JobSeekerController.getApplications().then((res) => {
      let postIDs = res.slice(0, 4); // get first 4 applications
      postIDs.forEach((val, i, arr) => {
        PostController.getPost(val.postId).then((res) => {
          if (!ignore)
            setPostData((postData) => [
              ...postData,
              { status: val.status, data: res, application: val, assesmentLink: val.assesmentLink },
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
          paddingTop: "100px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "whitesmoke",
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "32px",
          }}
          gutterBottom
        >
          My Applications
        </Typography>

        <Grid container direction="row" justifyContent="center" spacing={2}>
          {postData.map((post) => {
            return (
              <Grid
                item
                xs={12}
                key={post.data._id}
              >
                <TrackerCard post={post} type="tracker"/>
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
              navigate("/my-applications");
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              View More
            </Typography>
            <ArrowRightAltIcon />
          </IconButton>
        </Box>
      </Paper>
    </div>
  );
}

export default ApplicationTracker;
