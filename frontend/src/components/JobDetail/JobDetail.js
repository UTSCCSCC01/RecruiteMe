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


const JobDetail = (props) => {
    const [showModal, setShowModal] = React.useState(false);
    const [viewResume, setViewResume] = React.useState();
    const role = 'Software Engineer'
    const company = 'Amazon'
    const jobDescription = 'Advertising at Amazon is growing incredibly fast by providing efficient tools to drive sales for our vendors and sellers. These customers need tools that help them get the most from their dollar in the least time. As a Software Development Engineer you will work alongside a team that will innovate and pioneer new campaign management features. The Campaign Management team ensures Advertisers can easily use tools to launch their campaigns independently. We are looking for a pioneering and collaborative Software Engineer to work in our unique, product-focused “2-pizza team.” You will sit side-by-side with product owners, contributing to the new ideas that will become your projects. You will build applications and that provide the right help in the right place at the right time. If you are a Software Development Engineer who is interested in being close to the business problems, wants to broaden your leadership skills, and are passionate about delivering world class user experiences, we would love to talk to you. Great candidates for this role have good communication skills and know how to work to a collaborative and win-win solution. They will enjoy understanding the technical details and delight in solving problems. Most important, they will work shoulder-to-shoulder with engineers, product leaders, and software development managers to deliver world-class software.'
    const recruiterTitle = ' | Recruiter'

    const handleApplyClick = event => {
        setShowModal(true);
    };
    const handleClose = event => {
        setShowModal(false);
    };

    return (
        <Box sx={{ display: "flex", overflow: "hidden"}}>
            <Drawer
                variant="permanent"
                sx={{
                    height: 1200,
                    width: 2230,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        left: 50,
                        top: 200,
                        height: 950,
                        width: 2180,
                        boxSizing: "border-box",
                        backgroundColor: "#D9D9D9",
                    },
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ display: 'flex', marginBottom: 350, marginRight: 100 }}>
                        <img style={{ width: 250, height: 250, marginLeft: 50 }} src={require('../../assets/amazon-logo-square.jpg')} />
                        <div style={{ marginTop: 260, marginLeft: -200 }}>
                            <Link to='/about'>Jane Smith</Link>
                            <text style={{}}>
                                {recruiterTitle}
                            </text>
                        </div>
                    </div>
                    <Box component="main" sx={{ width: 1700 }}>
                        <div style={{ marginLeft: 50, marginTop: 50, overflow: 'auto' }}>
                            <Link style={{ marginLeft: 1430 }} to='/about'>More about this company</Link>
                            <Typography variant="h4" mb={1} sx={{ paddingBottom: 2 }}>
                                {role + ' @ ' + company}
                            </Typography>
                            <Typography variant="body1" mb={2}>
                                {jobDescription}
                            </Typography>
                            <Typography variant="h5" mb={1} sx={{ paddingBottom: 2 }}>
                                Qualifications
                            </Typography>
                            <Typography variant="body1" mb={2}>
                                {jobDescription}
                            </Typography>
                            <Typography variant="h5" mb={1} sx={{ paddingBottom: 2 }}>
                                Job Requirements
                            </Typography>
                            <Typography variant="body1" mb={2}>
                                {jobDescription}
                                {/* {props.bio} */}
                            </Typography>
                        </div>
                    </Box>
                </div>
                <Button type='submit' color='secondary' variant='filled' sx={{ borderRadius: 3, left: 1950, top: 70, width: 200, height: 45, backgroundColor: "#91a4e8", textTransform: 'none', color: "#FFFFFF", fontSize: 19 }} onClick={() => handleApplyClick()} fullWidth>Apply Now</Button>
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
                        <Button type='submit' color='secondary' variant='filled' sx={{ top: 10, borderRadius: 3, width: 200, height: 45, left:50, backgroundColor: "#FFFFFF", textTransform: 'none', color: "#91a4e8", fontSize: 19 }} onClick={() => handleApplyClick()} fullWidth>Submit Resume</Button>

                    </Box>
                </Modal>
            </Drawer>


        </Box>
    );
};
export default JobDetail