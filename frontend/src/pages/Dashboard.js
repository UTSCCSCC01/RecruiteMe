import React from "react";
import Navbar from "../components/Navbar";
import UserController from "../controller/UserController";
import RecruiterController from "../controller/RecruiterController";
import JobSeekerController from "../controller/JobSeekerController";
import { useEffect, useState } from "react";
import { sectionsType } from "../components/Dashboard/NavSections";
import ApplicationTracker from "../components/Dashboard/ApplicationTracker";
import JobPostTracker from "../components/Dashboard/JobPostTracker";
import { JobBoard } from "../components/JobPostings/JobBoard";
import { Grid ,Box} from "@mui/material";

function Dashboard() {
  const [pfp, setPfp] = useState(null);
  const [navtype, setNavtype] = useState(null);
  useEffect(() => {
    UserController.getCurrent().then((res) => {
      if (res.recruiter) {
        setNavtype("recruiter");
      } else {
        setNavtype("jobseeker");
      }
    });
  }, []);
  useEffect(() => {
    if (navtype === "jobseeker") {
      JobSeekerController.getPfp().then((res) => {
        const base64String = btoa(
          new Uint8Array(res.data.data).reduce(function (data, byte) {
            return data + String.fromCharCode(byte);
          }, "")
        );
        setPfp(base64String);
      });
    } else if (navtype === "recruiter") {
      RecruiterController.getPfp().then((res) => {
        const base64String = btoa(
          new Uint8Array(res.data.data).reduce(function (data, byte) {
            return data + String.fromCharCode(byte);
          }, "")
        );
        setPfp(base64String);
      });
    }
  }, [navtype]);

  return (
    <div style={{ height: "100vh" }}>
      <Navbar
        type={navtype}
        pfp={pfp}
        sections={
          navtype === "recruiter"
            ? sectionsType[2]
            : navtype === "jobseeker"
            ? sectionsType[1]
            : []
        }
      />
      {navtype === "jobseeker" ? (
                <Box display={"flex"}>
                <Box>
                    <ApplicationTracker />
                </Box>
                <Box width={"80%"} height={"100vh"} style={{overflowY:"scroll"}}>
                    <JobBoard limit={true} customWidth={"90%"} />
                </Box>
            </Box>
      ) : (
        ""
      )}
      {navtype === "recruiter" ? <JobPostTracker /> : ""}
    </div>
  );
}

export default Dashboard;
