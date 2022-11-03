import { Box, Button, Typography } from "@mui/material";
import * as React from "react";
import { JobPostCard } from "../../JobPostings/JobBoard";
import AddIcon from "@mui/icons-material/Add";
import Rating from "@mui/material/Rating";
import Pagination from "@mui/material/Pagination";
import CompanyController from "../../../controller/CompanyController";

export const AboutSection = (props) => {
    return (
        <Box mt={3} mb={4} id={"profile-bio"}>
            <Typography variant="h4" mb={1}>
                About
            </Typography>
            <Typography variant="body1" mb={2}>
                {props.about}
            </Typography>
        </Box>
    );
};

export const JobPostSection = (props) => {
    const [page, setPage] = React.useState(1);
    const [jobPosts, setJobPosts] = React.useState(props.jobs);

    return (
        <Box mt={3} mb={4}>
            <Typography variant="h4" mb={2}>
                Open Job Posts
            </Typography>
            {jobPosts &&
                jobPosts
                    .slice(3 * (page - 1), 3 * page)
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
                            companyLogo={props.companyLogo}
                        />
                    ))}

            {jobPosts && jobPosts.length > 3 && (
                <Pagination
                    count={Math.ceil(jobPosts.length / 3)}
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
    );
};

const ReviewTile = (props) => {
    return (
        <Box my={2} border={"1px solid grey"} padding={2}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0px 0px",
                }}
            >
                <Typography variant="h6" fontWeight={"500"}>
                    {props.position}
                </Typography>

                <Rating
                    name="customized-10"
                    defaultValue={props.rating}
                    max={10}
                    readOnly
                />
            </Box>
            <Typography
                sx={{
                    color: "#466bf0",
                    fontSize: "16px",
                    fontStyle: "italic",
                    fontWeight: 300,
                }}
            >
                Salary: {props.salary}
            </Typography>
            <Typography variant="body1">{props.review}</Typography>
        </Box>
    );
};

export const ReviewSection = (props) => {
    const [reviews, setReviews] = React.useState(props.reviews);
    const [page, setPage] = React.useState(1);

    const refreshReviews = () => {
        CompanyController.getCompany(props.companyId).then((res) => {
            setReviews(res.reviews);
        });
    };

    const openReviewModal = () => {
        console.log("add review");
        refreshReviews();
    };

    return (
        <Box mt={3} mb={4}>
            <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
            >
                <Typography variant="h4" mb={1}>
                    Reviews
                </Typography>
                {!props.isRecruiter && (
                    <Button
                        variant={"outlined"}
                        startIcon={<AddIcon fontSize="large" />}
                        sx={{
                            color: "#91A4E8",
                            border: "#91A4E8 1px solid",
                            fontWeight: "bold",
                            fontSize: "16px",
                        }}
                        onClick={openReviewModal}
                        download
                    >
                        Add Review
                    </Button>
                )}
            </Box>
            {reviews &&
                reviews
                    .slice(5 * (page - 1), 5 * page)
                    .map((rev) => (
                        <ReviewTile
                            key={rev._id}
                            position={rev.position}
                            salary={rev.salary}
                            rating={rev.rating}
                            review={rev.review}
                        />
                    ))}

            {reviews && reviews.length > 5 && (
                <Pagination
                    count={Math.ceil(reviews.length / 5)}
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
    );
};
