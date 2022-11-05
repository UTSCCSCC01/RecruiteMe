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

