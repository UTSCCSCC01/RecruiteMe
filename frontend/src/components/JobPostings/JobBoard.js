import * as React from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddIcon from "@mui/icons-material/Add";
import companyLogo from "../../assets/example-logo.png";
import UserController from "../../controller/UserController";
import RecruiterController from "../../controller/RecruiterController";
import JobSeekerController from "../../controller/JobSeekerController";
import Navbar from "../Navbar";
import { sectionsType } from "../Dashboard/NavSections";
import { useNavigate } from "react-router-dom";

const JobBoardHeader = (props) => {
    const navigate = useNavigate();

    const openJobBoard = () => {
        navigate("/jobs");
    };

    const openCreateJobModal = () => {
        console.log("open create job post modal");
    };

    React.useEffect(() => {
        console.log(props);
    }, []);

    return (
        <Box display={"flex"} mb={4} justifyContent={"space-between"}>
            <Box display={"flex"} flexDirection={"column"}>
                <Typography
                    sx={{
                        fontWeight: 500,
                        fontSize: "32px",
                    }}
                >
                    {!props.isRecruiter ? (
                        <>Job Postings</>
                    ) : (
                        <>My Job Postings</>
                    )}
                </Typography>
                {props.jobPosts > 0 && props.limit && (
                    <Box display={"flex"}>
                        Showing {Math.min(10, props.jobPosts)} posts |
                        <Box
                            pl={1}
                            color={"#6E8BF2"}
                            fontWeight={500}
                            onClick={openJobBoard}
                            sx={{ cursor: "pointer" }}
                        >
                            {" "}
                            View More
                        </Box>
                    </Box>
                )}
            </Box>

            {props.isRecruiter && (
                <Button
                    onClick={openCreateJobModal}
                    startIcon={<AddIcon fontSize="medium" />}
                    sx={{
                        color: "white",
                        backgroundColor: "#91A4E8",
                        fontSize: "20px",
                        fontWeight: "400",
                        textTransform: "none",
                        height: "50px",
                        padding: 2,
                        "&:hover": {
                            backgroundColor: "#91A4E8",
                        },
                    }}
                    size="145px"
                >
                    Create Job Post
                </Button>
            )}
        </Box>
    );
};

export const JobPostCard = (props) => {
    const navigate = useNavigate();

    const openJobPost = () => {
        navigate("/job", { state: { jobId: props.id } });
        console.log("open job post for id %s", props.id);
    };

    const openCompanyPage = () => {
        navigate("/company/635ae860ce5914a300f65460");
        // navigate("/company", {
        //     state: {
        //         companyId: "635ae860ce5914a300f65460",
        //     },
        // });
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
                onClick={openCompanyPage}
                src={
                    props.companyLogo
                        ? `data:image/png;base64,${props.companyLogo}`
                        : companyLogo
                }
                sx={{
                    width: 150,
                    height: 150,
                    backgroundColor: "white",
                    margin: "20px",
                    alignSelf: "center",
                    padding: "10px",
                    cursor: "pointer",
                }}
            />
            <Box
                my={"10px"}
                ml={"10px"}
                display={"flex"}
                width={"100%"}
                flexDirection={"column"}
            >
                <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
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
                        <Typography
                            sx={{
                                fontWeight: 300,
                                fontSize: "28px",
                                cursor: "pointer",
                            }}
                            onClick={openCompanyPage}
                        >
                            • {props.company}
                        </Typography>
                    </Box>
                    {new Date(props.closingOn) > new Date() ? (
                        <Box mr={3}>
                            Closing on{" "}
                            {new Date(props.closingOn).toLocaleDateString(
                                "en-US"
                            )}
                        </Box>
                    ) : (
                        <Box mr={3} sx={{ color: "red", fontWeight: 500 }}>
                            CLOSED
                        </Box>
                    )}
                </Box>

                <Box
                    py={"5px"}
                    mt={-1}
                    sx={{ fontWeight: 200, fontStyle: "italic" }}
                    display={"flex"}
                >
                    {props.applicants == 1 ? (
                        <Box
                            sx={{ color: "#466bf0", fontWeight: 300 }}
                            pr={"5px"}
                        >
                            {" "}
                            {props.applicants} Applicant
                        </Box>
                    ) : (
                        <Box
                            sx={{ color: "#466bf0", fontWeight: 300 }}
                            pr={"5px"}
                        >
                            {props.applicants} Applicants
                        </Box>
                    )}
                    <>
                        • Posted on{" "}
                        {new Date(props.postedOn).toLocaleDateString("en-US")}
                    </>
                </Box>

                <Box
                    sx={{
                        height: "72px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        marginRight: "50px",
                        lineHeight: "18px",
                    }}
                >
                    {props.description}
                </Box>

                <Button
                    onClick={openJobPost}
                    endIcon={<ArrowForwardIcon fontSize="large" />}
                    sx={{
                        color: "#6E8BF2",
                        fontSize: "20px",
                        fontWeight: "400",
                        textTransform: "none",
                        padding: 0,
                        marginTop: 1,
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
    const [limit, setLimit] = React.useState(props.limit);
    const [isRecruiter, setIsRecruiter] = React.useState(null);
    const [jobPosts, setJobPosts] = React.useState(null);
    const [page, setPage] = React.useState(1);
    const [pfp, setPfp] = React.useState(null);

    React.useEffect(() => {
        UserController.getCurrent().then((res) => {
            console.log(res);
            if (res.recruiter) {
                setIsRecruiter(true);
                RecruiterController.getRecruiter().then((res) => {
                    console.log(res[0].jobPosts);
                    setJobPosts(
                        res[0].jobPosts ? res[0].jobPosts.reverse() : []
                    );
                });
                RecruiterController.getPfp().then((res) => {
                    const base64String = btoa(
                        new Uint8Array(res.data.data).reduce(function (
                            data,
                            byte
                        ) {
                            return data + String.fromCharCode(byte);
                        },
                        "")
                    );
                    setPfp(base64String);
                });
            } else {
                setIsRecruiter(false);
                JobSeekerController.getPfp().then((res) => {
                    const base64String = btoa(
                        new Uint8Array(res.data.data).reduce(function (
                            data,
                            byte
                        ) {
                            return data + String.fromCharCode(byte);
                        },
                        "")
                    );
                    setPfp(base64String);
                });
                JobSeekerController.getJobPosts().then((jobs) => {
                    const filtered = jobs.filter(
                        (job) => new Date(job.deadline) > new Date()
                    );
                    setJobPosts(filtered ? filtered.reverse() : []);
                });
            }
        });
    }, []);

    return (
        <>
            <Navbar
                type={isRecruiter ? "recruiter" : "jobseeker"}
                pfp={pfp}
                sections={isRecruiter ? sectionsType[2] : sectionsType[1]}
            />
            <Box
                sx={{ marginTop: "100px" }}
                width={props.customWidth ?? "80%"}
                mx={"auto"}
            >
                {isRecruiter != null && (
                    <JobBoardHeader
                        isRecruiter={isRecruiter}
                        limit={limit}
                        jobPosts={jobPosts ? jobPosts.length : null}
                    />
                )}
                {jobPosts &&
                    jobPosts
                        .slice(10 * (page - 1), 10 * page)
                        .map((post) => (
                            <JobPostCard
                                role={post.role}
                                company={post.companyName}
                                description={post.description}
                                applicants={post.numofApplicants}
                                postedOn={post.posted}
                                closingOn={post.deadline}
                                id={post._id}
                                key={post._id}
                            />
                        ))}

                {jobPosts && jobPosts.length > 10 && !limit && (
                    <Pagination
                        count={Math.ceil(jobPosts.length / 10)}
                        page={page}
                        onChange={(event, value) => setPage(value)}
                        sx={{
                            justifyContent: "center",
                            display: "flex",
                            marginBottom: 2,
                        }}
                    />
                )}
            </Box>
        </>
    );
};
