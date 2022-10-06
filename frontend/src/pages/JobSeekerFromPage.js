import JobSeekerForm from '../components/CreateJobSeekerForm/JobSeekerForm';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import * as React from 'react';
import JobSeekerController from "../controller/JobSeekerController";
import UserController from "../controller/UserController";

export default function JobSeekerFormPage() {
    const [profile, setProfile] = React.useState(null);
    const [user, setUser] = React.useState(null);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        UserController.getCurrent().then((res) => {
            setUser(res);
            JobSeekerController.getJobSeeker().then((res) => {setProfile(res); setOpen(true);});
        });
        
        
    }
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <JobSeekerForm close  = {handleClose} profile = {profile} user ={user}></JobSeekerForm>
            </Modal>

        </div>

    )
}