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
import "./Profile.css";
import EditIcon from "@mui/icons-material/Edit";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import profilePic from "./example-assets/profile-pic-example.png";
import {
    BioSection,
    WorkExperienceSection,
    SkillsSection,
    ResumeSection,
    EducationSection,
} from "./ProfileSections";
import * as React from "react";

const ProfileHeader = (props) => {
    const handleClick = () => {
        console.log("take me to edit profile page");
    };

    return (
        <>
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
                                fontSize: "30px",
                            }}
                            pr={1}
                            className="profile-name"
                        >
                            {props.name}
                        </Typography>
                        {props.isRecruiter && (
                            <Typography
                                sx={{ fontWeight: 500, fontSize: "30px" }}
                                className="recruiter"
                            >
                                • Recruiter @ {props.company}
                            </Typography>
                        )}
                    </Box>
                    <Typography
                        sx={{
                            fontWeight: 300,
                            fontSize: "24px",
                            fontStyle: "italic",
                        }}
                        pr={1}
                        className="profile-tagline"
                    >
                        {props.status}
                    </Typography>
                </Box>

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
                        Edit Profile
                    </Button>
                </Box>

                <Avatar
                    className="profile-pic"
                    alt={props.name}
                    src={profilePic} //TODO: display pic
                    sx={{
                        width: 225,
                        height: 225,
                        position: "absolute",
                        top: 125,
                        left: 35,
                        border: "white 4px solid",
                    }}
                />
            </Box>
        </>
    );
};

const ProfileInfo = (props) => {
    return (
        <Box ml={2} mr={5}>
            {props.bio && <BioSection bio={props.bio} />}
            {props.workExperience && (
                <WorkExperienceSection workExperience={props.workExperience} />
            )}
            {props.education && (
                <EducationSection education={props.education} />
            )}
            {props.skills && <SkillsSection skills={props.skills} />}
            <ResumeSection />
        </Box>
    );
};

export const Profile = (props) => {
    return (
        <Box sx={{ display: "flex" }}>
            <AppBar
                position="fixed"
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
                <ProfileHeader
                    name={props.name}
                    isRecruiter={props.isRecruiter}
                    company={props.company}
                    status={props.status}
                ></ProfileHeader>
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
                        {props.bio && (
                            <ListItem key={"About Me"} disablePadding>
                                <ListItemButton sx={{ textAlign: "end" }}>
                                    <ListItemText
                                        primaryTypographyProps={{
                                            fontSize: "18px",
                                        }}
                                        primary={"About Me"}
                                    />
                                </ListItemButton>
                            </ListItem>
                        )}
                        {props.workExperience && (
                            <ListItem key={"Work Experience"} disablePadding>
                                <ListItemButton sx={{ textAlign: "end" }}>
                                    <ListItemText
                                        primaryTypographyProps={{
                                            fontSize: "18px",
                                        }}
                                        primary={"Work Experience"}
                                    />
                                </ListItemButton>
                            </ListItem>
                        )}
                        {props.education && (
                            <ListItem key={"Education"} disablePadding>
                                <ListItemButton sx={{ textAlign: "end" }}>
                                    <ListItemText
                                        primaryTypographyProps={{
                                            fontSize: "18px",
                                        }}
                                        primary={"Education"}
                                    />
                                </ListItemButton>
                            </ListItem>
                        )}
                        {props.skills && (
                            <ListItem key={"Skills"} disablePadding>
                                <ListItemButton sx={{ textAlign: "end" }}>
                                    <ListItemText
                                        primaryTypographyProps={{
                                            fontSize: "18px",
                                        }}
                                        primary={"Skills"}
                                    />
                                </ListItemButton>
                            </ListItem>
                        )}
                        <ListItem key={"Resume"} disablePadding>
                            <ListItemButton sx={{ textAlign: "end" }}>
                                <ListItemText
                                    primaryTypographyProps={{
                                        fontSize: "18px",
                                    }}
                                    primary={"Resume"}
                                />
                            </ListItemButton>
                        </ListItem>
                    </List>

                    {props.email && (
                        <Box
                            id="contact-info"
                            sx={{
                                position: "absolute",
                                bottom: 5,
                                right: 2,
                            }}
                            pr={1}
                        >
                            <Box
                                sx={{ fontSize: "18px", fontWeight: "bold" }}
                                pb={1}
                            >
                                Contact Info
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"center"}
                                width={250}
                                justifyContent={"flex-end"}
                            >
                                <MailOutlineIcon />
                                <Link
                                    sx={{
                                        textOverflow: "ellipsis",
                                        overflow: "hidden",
                                        fontSize: "16px",
                                        paddingLeft: 1,
                                        textDecoration: "none",
                                        color: "#800dd9",
                                    }}
                                    onClick={() =>
                                        (window.location = `mailto:${props.email}`)
                                    }
                                >
                                    {props.email}
                                </Link>
                            </Box>
                        </Box>
                    )}
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3, pr: 0 }}>
                <Toolbar sx={{ height: 250 }} />
                <ProfileInfo
                    bio={props.bio}
                    workExperience={props.workExperience}
                    education={props.education}
                    skills={props.skills}
                ></ProfileInfo>
            </Box>
        </Box>
    );
};
