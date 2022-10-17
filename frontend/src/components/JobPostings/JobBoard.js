import * as React from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddIcon from "@mui/icons-material/Add";
import companyLogo from "./example-logo.png";

const JobBoardHeader = (props) => {
    const handleClick = () => {
        console.log("open create job post modal");
    };

    return (
        <Box display={"flex"} mb={4} justifyContent={"space-between"}>
            <Typography
                sx={{
                    fontWeight: 500,
                    fontSize: "32px",
                }}
            >
                Job Postings
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
        </Box>
    );
};

const JobPostCard = (props) => {
    const handleClick = () => {
        console.log("open job post");
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
                        Job title
                    </Typography>
                    <Typography sx={{ fontWeight: 300, fontSize: "28px" }}>
                        • Company
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
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Sed ut
                    perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo.Sed ut perspiciatis unde
                    omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo
                    inventore veritatis et quasi architecto beatae vitae dicta
                    sunt explicabo. Sed ut perspiciatis unde omnis iste natus
                    error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis et quasi architecto beatae vitae dicta sunt
                    explicabo.Sed ut perspiciatis unde omnis iste natus error
                    sit voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Sed ut
                    perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo.Sed ut perspiciatis unde
                    omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo
                    inventore veritatis et quasi architecto beatae vitae dicta
                    sunt explicabo. Sed ut perspiciatis unde omnis iste natus
                    error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis et quasi architecto beatae vitae dicta sunt
                    explicabo.
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
    const [page, setPage] = React.useState(1);
    return (
        <Box sx={{ marginTop: "100px" }} width={"80%"} mx={"auto"}>
            <JobBoardHeader />
            <JobPostCard />
            <JobPostCard />
            <Pagination
                count={10}
                page={page}
                sx={{
                    justifyContent: "center",
                    display: "flex",
                }}
            />
        </Box>
    );
};
