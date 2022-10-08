import JobSeekerForm from '../components/CreateJobSeekerForm/JobSeekerForm';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import * as React from 'react';
import JobSeekerController from "../controller/JobSeekerController";
import RecruiterController from "../controller/RecruiterController";
import UserController from "../controller/UserController";
import { useNavigate, UseNavigate } from 'react-router-dom';
import RecruiterForm from '../components/CreateJobSeekerForm/RecruiterForm';

export default function CreateProfilePage() {
    const navigate = useNavigate();
    const [profile, setProfile] = React.useState(null);
    const [user, setUser] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [isRecruiter, setIsRecruiter] = React.useState(false);
    if(!user){
        UserController.getCurrent().then((res) => {
        setUser(res);
        if(res.recruiter){
            setIsRecruiter(true);
            RecruiterController.getRecruiter().then((res) => { setProfile(res); setOpen(true); });
        }else{
            JobSeekerController.getJobSeeker().then((res) => { setProfile(res); setOpen(true); });
        }
        
    });
    }
    
        const handleClose = () => {setOpen(false); navigate('/profile')};

        return (
            <div>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            
            {isRecruiter
            ? <RecruiterForm close={handleClose} profile={profile} user={user}></RecruiterForm>
            : <JobSeekerForm close={handleClose} profile={profile} user={user}></JobSeekerForm>
            }
            
            </Modal>
                
            </div>

        )
    }