import {
    AppBar,
    Avatar,
    Box,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
} from "@mui/material";
import "./Profile.css";
import EditIcon from "@mui/icons-material/Edit";
import profilePic from "./example-assets/profile-pic-example.png";
import {
    BioSection,
    WorkExperienceSection,
    SkillsSection,
    ResumeSection,
} from "./ProfileSections";
import * as React from "react";

const ProfileHeader = (props) => {
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
                        display: "flex",
                        color: "white",
                        alignItems: "center",
                        position: "absolute",
                        left: 300,
                        bottom: 0,
                    }}
                >
                    <Typography
                        sx={{ fontWeight: 500, padding: 1, fontSize: "32px" }}
                        className="profile-name"
                    >
                        John Smith •
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 300, fontSize: "24px" }}
                        className="profile-tagline"
                    >
                        Currently seeking work
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
                        startIcon={<EditIcon fontSize="large" />}
                        sx={{
                            color: "white",
                            fontSize: "24px",
                            fontWeight: "400",
                            textTransform: "none",
                        }}
                        size="175px"
                    >
                        Edit Profile
                    </Button>
                </Box>

                <Avatar
                    className="profile-pic"
                    alt="John Smith"
                    src={profilePic}
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

const ProfileInfo = () => {
    const [showResume, setShowResume] = React.useState(false);

    return (
        <Box ml={2} mr={8}>
            <BioSection />
            <WorkExperienceSection />
            <SkillsSection />
            <ResumeSection showResume={showResume} />
        </Box>
    );
};

export const Profile = () => {
    return (
        <Box sx={{ display: "flex" }}>
            <AppBar
                position="fixed"
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
                <ProfileHeader></ProfileHeader>
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
                        {[
                            "About Me",
                            "Work Experience",
                            "Skills",
                            "Resume",
                        ].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton
                                    sx={{
                                        textAlign: "end",
                                    }}
                                >
                                    <ListItemText
                                        primaryTypographyProps={{
                                            fontSize: "20px",
                                        }}
                                        primary={text}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar sx={{ height: 250 }} />
                <ProfileInfo></ProfileInfo>
            </Box>
        </Box>
    );
};
