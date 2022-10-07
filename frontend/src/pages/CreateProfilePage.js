import JobSeekerForm from '../components/CreateJobSeekerForm/JobSeekerForm';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import * as React from 'react';
import JobSeekerController from "../controller/JobSeekerController";
import UserController from "../controller/UserController";
import { useNavigate, UseNavigate } from 'react-router-dom';

export default function CreateProfilePage() {
    const navigate = useNavigate();
    const [profile, setProfile] = React.useState(null);
    const [user, setUser] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    if(!user){
        UserController.getCurrent().then((res) => {
        setUser(res);
        JobSeekerController.getJobSeeker().then((res) => { setProfile(res); setOpen(true); });
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
                    <JobSeekerForm close={handleClose} profile={profile} user={user}></JobSeekerForm>
                </Modal>

            </div>

        )
    }