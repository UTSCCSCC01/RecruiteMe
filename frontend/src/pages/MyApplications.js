import React from "react";
import Navbar from "../components/Navbar";
import { sectionsType } from "../components/Dashboard/NavSections";
import { useEffect, useState } from "react";
import UserController from "../controller/UserController";
import JobSeekerController from "../controller/JobSeekerController";
import { Box, Grid, Paper, IconButton, Typography } from "@mui/material";
import PostController from "../controller/PostController";
import TrackerCard from "../components/Dashboard/TrackerCard";
import { useNavigate } from "react-router-dom";
// Does not handle Recruiters being on this page
function MyApplications() {
  const [pfp, setPfp] = useState(null);
  const [postData, setPostData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    JobSeekerController.getPfp().then((res) => {
      const base64String = btoa(
        new Uint8Array(res.data.data).reduce(function (data, byte) {
          return data + String.fromCharCode(byte);
        }, "")
      );
      setPfp(base64String);
    });
    let ignore = false;
    JobSeekerController.getApplications().then((res) => {
      let postIDs = res;
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

  return (
    <>
      <Navbar type={"recruiter"} pfp={pfp} sections={sectionsType[1]} />
      <div id="page-padding" style={{ height: "50px" }}></div>
      <div id="wrapper" style={{ padding: 50 }}>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "32px",
          }}
          gutterBottom
        >
          My Applications
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, sm: 4, md: 6 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {postData.map((post) => {
            console.log(post);
            return (
              <Grid
                item
                xs={4}
                key={post.data._id}
              >
                <TrackerCard post={post} type={"page"} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
}

export default MyApplications;
