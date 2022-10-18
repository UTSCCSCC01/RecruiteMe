import * as React from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddIcon from "@mui/icons-material/Add";
import companyLogo from "./example-logo.png";
import UserController from "../../controller/UserController";
import RecruiterController from "../../controller/RecruiterController";
import JobSeekerController from "../../controller/JobSeekerController";

const JobBoardHeader = (props) => {
    const handleClick = () => {
        console.log("open create job post modal");
    };

    return (
        <Box display={"flex"} mb={4} justifyContent={"space-between"}>
            {!props.isRecruiter && (
                <Typography
                    sx={{
                        fontWeight: 500,
                        fontSize: "32px",
                    }}
                >
                    Job Posts
                </Typography>
            )}
            {props.isRecruiter && (
                <>
                    <Typography
                        sx={{
                            fontWeight: 500,
                            fontSize: "32px",
                        }}
                    >
                        My Job Posts
                    </Typography>
                    <Button
                        onClick={handleClick}
                        startIcon={<AddIcon fontSize="medium" />}
                        sx={{
                            color: "white",
                            backgroundColor: "#6E8BF2",
                            fontSize: "20px",
                            fontWeight: "400",
                            textTransform: "none",
                        }}
                        size="145px"
                    >
                        Create Job Post
                    </Button>
                </>
            )}
        </Box>
    );
};

const JobPostCard = (props) => {
    const handleClick = () => {
        console.log("open job post for id %s", props.id);
    };

    return (
        <Box
            display={"flex"}
            sx={{
                height: "200px",
                backgroundColor: "#D9D9D9",
                marginBottom: "30px",
                padding: "10px",
            }}
        >
            <Avatar
                variant="rounded"
                className="company-logo"
                alt={props.company}
                // src={`data:image/png;base64,${pfp}`} //TODO: display pic
                src={companyLogo}
                sx={{
                    width: 150,
                    height: 150,
                    backgroundColor: "white",
                    margin: "20px",
                    alignSelf: "center",
                    padding: "10px",
                }}
            />
            <Box
                my={"10px"}
                ml={"10px"}
                display={"flex"}
                width={"100%"}
                flexDirection={"column"}
            >
                <Box display={"flex"}>
                    <Typography
                        sx={{
                            fontWeight: 500,
                            fontSize: "28px",
                        }}
                        pr={1}
                    >
                        {props.role}
                    </Typography>
                    <Typography sx={{ fontWeight: 300, fontSize: "28px" }}>
                        • {props.company}
                    </Typography>
                </Box>

                <Box
                    sx={{
                        height: "90px",
                        overflow: "scroll",
                        textOverflow: "ellipsis",
                        marginRight: "50px",
                        lineHeight: "18px",
                    }}
                >
                    {props.description}
                </Box>

                <Button
                    onClick={handleClick}
                    endIcon={<ArrowForwardIcon fontSize="large" />}
                    sx={{
                        color: "#6E8BF2",
                        fontSize: "20px",
                        fontWeight: "400",
                        textTransform: "none",
                        padding: 0,
                        marginTop: 2,
                        marginRight: 3,
                        alignSelf: "flex-end",
                    }}
                    size="145px"
                >
                    Learn More
                </Button>
            </Box>
        </Box>
    );
};

export const JobBoard = (props) => {
    const [isRecruiter, setIsRecruiter] = React.useState(false);
    const [jobPosts, setJobPosts] = React.useState([]);
    const [page, setPage] = React.useState(1);

    React.useEffect(() => {
        UserController.getCurrent().then((res) => {
            if (res.recruiter) {
                setIsRecruiter(true);
                RecruiterController.getRecruiter().then((res) => {
                    setJobPosts(res[0].jobPosts);
                });
            } else {
                JobSeekerController.getJobPosts().then((res) => {
                    setJobPosts(res);
                });
            }
        });
    }, []);

    return (
        <Box sx={{ marginTop: "100px" }} width={"80%"} mx={"auto"}>
            <JobBoardHeader isRecruiter={isRecruiter} />
            {jobPosts.slice(10 * (page - 1), 10 * page).map((post) => (
                <JobPostCard
                    role={post.role}
                    company={post.companyName}
                    description={post.description}
                    id={post._id}
                    key={post._id}
                />
            ))}

            {jobPosts.length > 10 && (
                <Pagination
                    count={Math.ceil(jobPosts.length / 10)}
                    page={page}
                    onChange={(event, value) => setPage(value)}
                    sx={{
                        justifyContent: "center",
                        display: "flex",
                    }}
                />
            )}
        </Box>
    );
};
