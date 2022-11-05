import {
    Box,
    Button,
    ListItem,
    ListItemAvatar,
    Typography,
    Avatar,
    ListItemText,
    Slide,
    Dialog,
    IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import JobSeekerController from "../../controller/JobSeekerController";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import ApplicantStatus from "./ApplicantStatus";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const ApplicantTracker = (props) => {
    const [applicant, setApplicant] = React.useState({});
    const [pfp, setPfp] = React.useState(null);
    const navigate = useNavigate();

    React.useEffect(() => {
        JobSeekerController.getPfpid(props.applicant).then((res) => {
            const base64String = btoa(
                new Uint8Array(res.data.data).reduce(function (data, byte) {
                    return data + String.fromCharCode(byte);
                }, "")
            );
            setPfp(base64String);
        });
        JobSeekerController.viewId(props.applicant).then((res) => {
            //compare job post id to job seekers appliedPost list and find the same ID
            const post = res[0].appliedPost.filter(
                (posts) => posts.postId === props.postId
            );
            setApplicant({
                fname: res[0].firstName,
                lname: res[0].lastName,
                bio: res[0].bio,
                uid: res[0].uid,
                post: post,
            });
        });
    }, [props]);

    const handleViewMore = () => {
        navigate("/view-profile/" + props.applicant, {
            state: { isRecruiter: false },
        });
    };

    return (
        <div>
            <ListItem sx={{ paddingTop: 4, backgroundColor: "#d9d9d9" }}>
                <ListItemAvatar>
                    <Avatar
                        sx={{ width: 150, height: 150 }}
                        src={`data:image/png;base64,${pfp}`}
                    ></Avatar>
                </ListItemAvatar>
                <Box>
                    <ListItemText
                        sx={{ paddingLeft: 2 }}
                        primary={
                            <Typography
                                variant="h5"
                                style={{
                                    verticalAlign: "bottom",
                                    color: "#000000",
                                }}
                            >
                                {applicant.fname} • {applicant.lname}
                            </Typography>
                        }
                        secondary={
                            <Typography
                                sx={{
                                    textOverflow: "ellipsis",
                                    height: 170,
                                    overflow: "hidden",
                                }}
                            >
                                {applicant.bio}
                            </Typography>
                        }
                    />

                    <ApplicantStatus applicant={applicant} />
                </Box>
            </ListItem>
            <Box
                style={{
                    backgroundColor: "#d9d9d9",
                    display: "flex",
                    justifyContent: "flex-end",
                }}
            >
                <Button onClick={handleViewMore}>View Profile -{">"}</Button>
            </Box>
            <Box sx={{ height: 30 }}></Box>
        </div>
    );
};
