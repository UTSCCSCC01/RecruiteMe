import JobSeekerForm from '../components/CreateJobSeekerForm/JobSeekerForm';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Navbar from "../components/Navbar";
import * as React from 'react';
import JobSeekerController from "../controller/JobSeekerController";
import RecruiterController from "../controller/RecruiterController";
import UserController from "../controller/UserController";
import { useNavigate, useLocation } from 'react-router-dom';
import JobDetail from '../components/JobDetail/JobDetail';
import { useEffect, useState } from "react";
import { sectionsType } from "../components/Dashboard/NavSections";
export default function JobDetailPage({}) {
    const navigate = useNavigate();
    const [profile, setProfile] = React.useState(null);
    const [user, setUser] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [isRecruiter, setIsRecruiter] = React.useState(false);
    const [job, setJob] = React.useState(null);
    const [pfp, setPfp] = useState(null);
    const [navtype, setNavtype] = useState(null);
    const {state} = useLocation();
    const { jobId } = state;
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
    if (!job) {
        JobSeekerController.getJobPost(jobId).then((res) => { setJob(res) });
    }

    const handleClose = () => { setOpen(false); navigate('/profile') };

    return (
        <div style={{ backgroundColor: '#ebe8e8' }}>
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
            {job &&
                <JobDetail job={job} close={handleClose} profile={profile} user={user}></JobDetail>}
        </div>

    )
}