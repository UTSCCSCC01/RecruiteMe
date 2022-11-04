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
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LogoutIcon from "@mui/icons-material/Logout";
import Modal from "@mui/material/Modal";
import JobSeekerController from "../../../controller/JobSeekerController";
import RecruiterController from "../../../controller/RecruiterController";
import UserController from "../../../controller/UserController";
import { AboutSection, JobPostSection, ReviewSection } from "./CompanySections";
import * as React from "react";
import JobSeekerForm from "../../CreateJobSeekerForm/JobSeekerForm";
import { useNavigate } from "react-router-dom";
import RecruiterForm from "../../CreateJobSeekerForm/RecruiterForm";
import CompanyReview from "../../CompanyReview/CompanyReview";

const CompanyHeader = (props) => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [company, setCompany] = React.useState(null);
    const [user, setUser] = React.useState(null);
    const handleBack = () => {
        navigate(-1);
    };
    const handleClick = () => {
        UserController.getCurrent().then((res) => {
            setUser(res);
            if (res.recruiter) {
                RecruiterController.getRecruiter().then((res) => {
                    setCompany(res);
                    setOpen(true);
                });
            } else {
                JobSeekerController.getJobSeeker().then((res) => {
                    setCompany(res);
                    setOpen(true);
                });
            }
        });
    };
    const handleLogout = () => {
        UserController.logout().then((res) => {
            navigate("/");
        });
    };
    const handleClose = () => {
        setOpen(false);
        window.location.reload(false);
    };
    return (
        <>
            {/* <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {props.isRecruiter ? (
                    <RecruiterForm
                        close={handleClose}
                        company={company}
                        user={user}
                        pfp={pfp}
                        resume={props.resume}
                    ></RecruiterForm>
                ) : (
                    <JobSeekerForm
                        close={handleClose}
                        company={company}
                        user={user}
                        pfp={pfp}
                        resume={props.resume}
                    ></JobSeekerForm>
                )}
            </Modal> */}
            <Box
                sx={{
                    width: "100%",
                    height: 250,
                    backgroundColor: "#91A4E8",
                    position: "absolute",
                    top: 0,
                    zIndex: 1,
                }}
            >
                <Box
                    sx={{
                        color: "white",
                        position: "absolute",
                        left: 300,
                        bottom: 0,
                        padding: 1,
                    }}
                >
                    <Box sx={{ display: "flex" }}>
                        <Typography
                            sx={{
                                fontWeight: 500,
                                fontSize: "42px",
                            }}
                            pr={1}
                            className="company-name"
                        >
                            {props.name}
                        </Typography>
                    </Box>
                </Box>
                <Button
                    onClick={handleBack}
                    startIcon={<ArrowBackIcon fontSize="large" />}
                    sx={{
                        top: 20,
                        left: 20,
                        color: "white",
                        fontSize: "20px",
                        fontWeight: "400",
                        textTransform: "none",
                    }}
                    size="145px"
                ></Button>
                <Box
                    sx={{
                        display: "flex",
                        color: "white",
                        alignItems: "center",
                        position: "absolute",
                        right: 20,
                        bottom: 0,
                    }}
                >
                    {props.userId == props.creatorId && (
                        <Button
                            onClick={handleClick}
                            startIcon={<EditIcon fontSize="large" />}
                            sx={{
                                color: "white",
                                fontSize: "20px",
                                fontWeight: "400",
                                textTransform: "none",
                            }}
                            size="145px"
                        >
                            Edit Company Info
                        </Button>
                    )}
                    <Button
                        onClick={handleLogout}
                        startIcon={<LogoutIcon fontSize="large" />}
                        sx={{
                            top: "100",
                            color: "white",
                            fontSize: "20px",
                            fontWeight: "400",
                            textTransform: "none",
                        }}
                        size="145px"
                    >
                        Log Out
                    </Button>
                </Box>

                <Avatar
                    className="company-pic"
                    alt={props.name}
                    src={`data:image/png;base64,${props.pfp}`}
                    sx={{
                        width: 225,
                        height: 225,
                        position: "absolute",
                        top: 125,
                        left: 35,
                        backgroundColor: "white",
                        color: "#91A4E8",
                        fontSize: 84,
                        fontWeight: 500,
                        objectFit: "scale-down",
                        border: "white 4px solid",
                    }}
                />
            </Box>
        </>
    );
};

const CompanyInfo = (props) => {
    return (
        <Box ml={2} mr={5}>
            {props.about && (
                <AboutSection about={props.about} companyId={props.companyId} />
            )}
            {props.jobs.length > 0 && (
                <JobPostSection
                    jobs={props.jobs}
                    pfp={props.pfp}
                    companyId={props.companyId}
                    companyLogo={props.companyLogo}
                />
            )}
            <CompanyReview
                reviews={props.reviews}
                companyId={props.companyId}
                isRecruiter={props.isRecruiter}
            />
        </Box>
    );
};

export const Company = (props) => {
    return (
        <>
            <Box sx={{ display: "flex" }}>
                <AppBar
                    position="fixed"
                    sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
                >
                    <CompanyHeader
                        name={props.company}
                        isRecruiter={props.isRecruiter}
                        pfp={props.pfp}
                        userId={props.userId}
                        creatorId={props.creatorId}
                    ></CompanyHeader>
                </AppBar>

                <Drawer
                    variant="permanent"
                    sx={{
                        width: 300,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: {
                            width: 300,
                            boxSizing: "border-box",
                            backgroundColor: "#D9D9D9",
                        },
                    }}
                >
                    <Toolbar sx={{ height: 375 }} />
                    <Box sx={{ overflow: "auto", textAlign: "right" }}>
                        <List>
                            {props.about && (
                                <ListItem key={"About"} disablePadding>
                                    <ListItemButton sx={{ textAlign: "end" }}>
                                        <ListItemText
                                            primaryTypographyProps={{
                                                fontSize: "18px",
                                            }}
                                            primary={"About"}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            )}
                            {props.jobs.length > 0 && (
                                <ListItem key={"Open Job Posts"} disablePadding>
                                    <ListItemButton sx={{ textAlign: "end" }}>
                                        <ListItemText
                                            primaryTypographyProps={{
                                                fontSize: "18px",
                                            }}
                                            primary={"Open Job Posts"}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            )}
                            {props.reviews.length > 0 && (
                                <ListItem key={"Reviews"} disablePadding>
                                    <ListItemButton sx={{ textAlign: "end" }}>
                                        <ListItemText
                                            primaryTypographyProps={{
                                                fontSize: "18px",
                                            }}
                                            primary={"Reviews"}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            )}
                        </List>
                    </Box>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3, pr: 0 }}>
                    <Toolbar sx={{ height: 250 }} />
                    <CompanyInfo
                        about={props.about}
                        jobs={props.jobs}
                        reviews={props.reviews}
                        isRecruiter={props.isRecruiter}
                        pfp={props.pfp}
                        companyId={props.companyId}
                        companyLogo={props.pfp}
                    ></CompanyInfo>
                </Box>
            </Box>
        </>
    );
};
