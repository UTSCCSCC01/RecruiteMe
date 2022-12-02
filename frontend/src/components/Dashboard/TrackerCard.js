// Cards for jobseeker application tracker, not recruiter's applicant tracker
import React from "react";
import {
    Avatar,
    Stack,
    Box,
    Grid,
    Button,
    Typography,
    Card,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Paper,
    CardMedia,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import CircleIcon from "@mui/icons-material/Circle";
import CompanyController from "../../controller/CompanyController";
import { useNavigate } from "react-router-dom";
import { status2text } from "./StatusTypes";
import { useEffect } from "react";
import UserController from "../../controller/UserController";
import JobSeekerController from "../../controller/JobSeekerController";
// Popup for interview date selector
const ModalPopup = ({ post }) => {
    const [status, setStatus] = React.useState(null);
    function handleChange(event) {
        setStatus(event.target.value);
    }
    function handleSubmit(event) {
        if (status !== null) {
            JobSeekerController.updateInterviewTime({
                postId: post.data._id,
                interviewDate: post.data.availableDates[status],
            }).then(()=>{
              window.location.reload();
            })
            
        }
    }
    useEffect(() => {
        console.log( post.data.availableDates[status]);
    }, [status]);

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        minWidth: 500,
        minHeight: 200,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
        alignItems: "center",
    };
    return (
        <Stack sx={style} spacing={2}>
            <Typography variant="h4">Select interview timeslot</Typography>
            <FormControl sx={{ m: 1, minWidth: 250 }}>
                <InputLabel id="select-label" shrink disableAnimation>
                    Select Date
                </InputLabel>
                <Select
                    labelId="select-label"
                    id="date-select"
                    value={status}
                    label="Select Date"
                    onChange={handleChange}
                    notched
                >
                    {post.data.availableDates.map((val, i) => {
                        return (
                            <MenuItem value={i}>
                                {new Date(val).toLocaleString()}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
            <Button onClick={handleSubmit} variant={"outlined"}>
                Submit
            </Button>
        </Stack>
    );
};

/*
types are "tracker" and "page" for variance in the application tracker and
the my applications page.
*/
function TrackerCard({ post, type }) {
    const [companyLogo, setCompanyLogo] = React.useState(null);
    const [open, setOpen] = React.useState(false);
      const [user, setUser] = React.useState(null);
    const navigate = useNavigate();
    React.useEffect(() => {
        if (!companyLogo) {
            CompanyController.getPfp(post.data.companyId).then((res) => {
                const base64String = btoa(
                    new Uint8Array(res.data.data).reduce(function (data, byte) {
                        return data + String.fromCharCode(byte);
                    }, "")
                );
                setCompanyLogo(base64String);
            });
        }
    }, []);
    const handleClick = (e) => {
        e.stopPropagation();
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        window.location.reload(false);
    };
    
  const handleCompleteOA = (event) => {
    event.stopPropagation()
    JobSeekerController.updateApplicationStatus({
      uid: user._id,
      postId: post.data._id,
      status: 5
    }).then(()=>{
              window.location.reload();
            })
    ;
  };
  const handleOpen = (event) => {
    event.stopPropagation()
  }
  React.useEffect(() => {
    UserController.getCurrent().then((res) => {
      setUser(res)
    })
    if (!companyLogo) {
      CompanyController.getPfp(post.data.companyId).then((res) => {
        const base64String = btoa(
          new Uint8Array(res.data.data).reduce(function (data, byte) {
            return data + String.fromCharCode(byte);
          }, "")
        );
        setCompanyLogo(base64String);
      });
    }
  }, []);
    return (
        <>
            <Modal open={open} onClose={handleClose}>
                <ModalPopup post={post} />
            </Modal>

            <Card
                style={
                    type === "tracker"
                        ? { cursor: "pointer" }
                        : { backgroundColor: "#D9D9D9" }
                }
                onClick={
                    type === "tracker"
                        ? () => {
                              navigate("/job", {
                                  state: { jobId: post.data._id },
                              });
                          }
                        : ""
                }
            >
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={2}
                    padding={2}
                >
                    <Grid item xs={5}>
                        <Avatar
                            media="picture"
                            variant="rounded"
                            alt={post.data.companyName}
                            src={`data:image/png;base64,${companyLogo}`}
                            sx={{
                                width: 90,
                                height: 90,
                                border: "1px solid #cacacc",
                                backgroundColor: "white",
                                color: "#91A4E8",
                                fontSize: 58,
                                alignSelf: "center",
                                padding: "10px",
                                cursor: "pointer",
                            }}
                        />
                    </Grid>
                    <Grid item xs={7}>
                        <Typography variant="subtitle1">
                            {post.data.role}
                            <CircleIcon
                                sx={{ fontSize: 10, margin: "0 5px 0 5px" }}
                            />
                            {post.data.companyName}
                        </Typography>
                        <Typography variant="body2">
                            {status2text[post.status]}
                        </Typography>
                                  {post.status === 4 && post.assesmentLink ?
            type == "tracker" ?
              <div>
                <Button variant="contained" onClick={handleOpen} href={post.assesmentLink} target="_blank" sx={{ textTransform: 'none', fontSize: '12px', backgroundColor: "#91a4e8" }}>Open Assessment</Button>
                <Button variant="contained" onClick={handleCompleteOA} target="_blank" sx={{ textTransform: 'none', fontSize: '12px', backgroundColor: "#91a4e8", marginTop: 1 }}>Complete OA</Button>
              </div>
              : <div>
                <Button variant="contained" href={post.assesmentLink} target="_blank" sx={{ textTransform: 'none', fontSize: '12px', backgroundColor: "#91a4e8", marginTop: 1 }}>Open Assessment</Button>
                <Button variant="contained" onClick={handleCompleteOA} target="_blank" sx={{ textTransform: 'none', fontSize: '12px', backgroundColor: "#91a4e8", marginTop: 1, left: 5}}>Complete OA</Button>
              </div>

            : null}
                        {/* {type === "page" ? (
                            <Typography variant="subtitle1" fontWeight={"bold"}>
                                Deadline:{" "}
                                {new Date(post.data.deadline).toDateString()}
                            </Typography>
                        ) : (
                            ""
                        )} */}
                        {post.status === 1 && post.application.interviewDate ? (
                            <>
                                <Typography variant="body2">
                                    {new Date(
                                        post.application.interviewDate
                                    ).toLocaleString()}
                                </Typography>
                                <Typography variant="body2" fontWeight={"bold"}>
                                    Link: {post.data.interviewLink}
                                </Typography>
                            </>
                        ) : (
                            ""
                        )}
                        {post.status === 1 ? (
                            <Button onClick={handleClick} variant={"outlined"}>
                                Select Date
                            </Button>
                        ) : (
                            ""
                        )}
                    </Grid>
                    {type === "page" ? (
                        <Grid item xs={12} textAlign="center">
                            <Typography
                                sx={{ cursor: "pointer" }}
                                color={"#91A4E8"}
                                onClick={() => {
                                    navigate("/job", {
                                        state: { jobId: post.data._id },
                                    });
                                }}
                            >
                                View Job Posting
                            </Typography>
                        </Grid>
                    ) : (
                        ""
                    )}
                </Grid>
            </Card>
        </>
    );
}

export default TrackerCard;
