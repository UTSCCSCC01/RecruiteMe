import RecruiterForm from '../components/RecruiterForm/RecruiterProfileForm';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import * as React from 'react';
import RecruiterController from "../controller/RecruiterController";
import UserController from "../controller/UserController";

export default function RecruiterFormPage() {
    const [profile, setProfile] = React.useState(null);
    const [user, setUser] = React.useState(null);

    const [open, setOpen] = React.useState(true);
    const handleOpen = () => {
        UserController.getCurrent().then((res) => {
            setUser(res);
            RecruiterController.getRecruiter().then((res) => {setProfile(res); setOpen(true);});
        });
        
        
    }
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button >Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                
            </Modal>
            RecruiterForm
<RecruiterForm close  = {handleClose} profile = {profile} user ={user}></RecruiterForm>
        </div>

    )
}
//onClick={handleOpen}
/*
<RecruiterForm close  = {handleClose} profile = {profile} user ={user}></RecruiterForm>

*/