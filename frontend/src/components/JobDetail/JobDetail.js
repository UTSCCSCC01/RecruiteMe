import {
    AppBar,
    Avatar,
    Box,
    Button,
    Drawer,
    Link,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
} from "@mui/material";
import Modal from '@mui/material/Modal';

import * as React from "react";
import { useNavigate } from "react-router-dom";
import JobSeekerController from "../../controller/JobSeekerController";


const JobDetail = (props) => {
    const [showModal, setShowModal] = React.useState(false);
     const recruiterTitle = ' | Recruiter'
    const qualification = props.job.qualification.map(qualification => (<Typography variant="body1" mb={2}>{'- ' + qualification}</Typography>));
    const handleApplyClick = event => {
        setShowModal(true);
    };
    const handleSubmitClick = event => {
        JobSeekerController.applyToJob({post_id:props.job._id}).then((res) => { setShowModal(false); });
    };
    const handleClose = event => {
        setShowModal(false);
    };

    return (
        <Box sx={{ display: "flex", overflow: "hidden"}}>
            <Drawer
                variant="permanent"
                sx={{
                    height: '100vh',
                    width: '100vh',
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        left: 50,
                        top: 100,
                        height: '90%',
                        paddingTop:10,
                        paddingBottom: 10, 
                        width: '95%',
                        boxSizing: "border-box",
                        backgroundColor: "#D9D9D9",
                    },
                }}
            >
                <div style={{ display: 'flex'}}>
                    <div style={{ display: 'flex', marginBottom: 350, marginRight: 100 }}>
                        <img style={{ width: 250, height: 250, marginLeft: 50 }} src={require('../../assets/amazon-logo-square.jpg')} />
                        <div style={{ marginTop: 260, marginLeft: -220 }}>
                            <Link style={{fontSize:20}} to='/about'>Jane Smith</Link>
                            <text style={{fontSize:20}}>
                                {recruiterTitle}
                            </text>
                        </div>
                    </div>
                    <Box component="main" sx={{ width: '78%'}}>
                        <div style={{ marginLeft: 50, overflow: 'auto' }}>
                            <Link style={{ marginLeft: "85%", fontSize:20}} to='/about'>More about this company</Link>
                            <Typography variant="h4" mb={1} sx={{ paddingBottom: 2 }}>
                                {props.job.role + ' \u25CF ' + props.job.companyName}
                            </Typography>
                            <Typography variant="body1" mb={2}>
                                {props.job.description}
                           </Typography>
                            <Typography variant="h5" mb={1} sx={{ paddingBottom: 2 }}>
                                Qualifications
                            </Typography>
                            {qualification}
                            <Typography variant="h5" mb={1} sx={{ paddingBottom: 2, paddingTop: 2 }}>
                                Deadline
                            </Typography>
                            <Typography variant="body1" mb={2}>
                                {props.job.deadline.substring(0, props.job.deadline.indexOf('T'))}
                            </Typography>
                          
                        </div>
                    </Box>
                </div>
                <Button type='submit' color='secondary' variant='filled' sx={{ borderRadius: 3, left: '90%', top: 50, width: 200, height: 45, backgroundColor: "#91a4e8", textTransform: 'none', color: "#FFFFFF", fontSize: 19 }} onClick={() => handleApplyClick()} fullWidth>Apply Now</Button>
                <Modal
                    open={showModal}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 300,
                        bgcolor: 'background.paper',
                        borderRadius:3,
                        boxShadow: 24,
                        p: 4,
                    }}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" textAlign="center">
                            Are you sure you want to apply to this job?
                        </Typography>
                        <Button type='submit' color='secondary' variant='filled' sx={{ top: 10, borderRadius: 3, width: 200, height: 45, left:50, backgroundColor: "#FFFFFF", textTransform: 'none', color: "#91a4e8", fontSize: 19 }} onClick={() => handleSubmitClick()} fullWidth>Submit Resume</Button>

                    </Box>
                </Modal>
            </Drawer>


        </Box>
    );
};
export default JobDetail