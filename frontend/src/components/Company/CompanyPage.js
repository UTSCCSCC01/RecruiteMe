import * as React from "react";
import { Company } from "./components/Company";
import UserController from "../../controller/UserController";
import RecruiterController from "../../controller/RecruiterController";
import JobSeekerController from "../../controller/JobSeekerController";
import CompanyController from "../../controller/CompanyController";
import { Box, CircularProgress } from "@mui/material";
import { useLocation } from "react-router-dom";

export const CompanyPage = () => {
    const [isRecruiter, setIsRecruiter] = React.useState(false);
    const { state } = useLocation();
    let cid = state.companyId;
    const [company, setCompany] = React.useState(null);
    const [user, setUser] = React.useState(null);
    const [pfp, setPfp] = React.useState(null);
    const [jobPosts, setJobPosts] = React.useState(null);
    React.useEffect(() => {
        UserController.getCurrent().then((res) => {
            if (res.recruiter) {
                setIsRecruiter(true);
                RecruiterController.getRecruiter().then((res) => {
                    setUser(res[0]);
                });
            } else {
                JobSeekerController.getJobSeeker().then((res) => {
                    setUser(res[0]);
                });
            }
        });
        CompanyController.getCompany(cid).then(async (res) => {
            setCompany(res);
            const jobs = [];
            for (const job of res.jobPosts) {
                const res = await JobSeekerController.getJobPost(job);
                jobs.push(res);
            }
            setJobPosts(
                jobs
                // jobs.filter((job) => new Date(job.deadline) > new Date())  //UNCOMMENT LATER
            );
        });
        CompanyController.getPfp(cid).then((res) => {
            const base64String = btoa(
                new Uint8Array(res.data.data).reduce(function (data, byte) {
                    return data + String.fromCharCode(byte);
                }, "")
            );
            setPfp(base64String);
        });
    }, []);

    const finishedLoading = company && user && jobPosts;

    if (!finishedLoading) {
        return (
            <Box
                sx={{
                    display: "flex",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <CircularProgress size={100} />
            </Box>
        );
    }

    return (
        <div>
            {finishedLoading && (
                <Company
                    company={company.companyName}
                    about={company.about}
                    pfp={pfp}
                    jobs={jobPosts}
                    reviews={company.reviews}
                    companyId={cid}
                    isRecruiter={isRecruiter}
                    userId={user._id}
                    creatorId={company.creatorId}
                />
            )}
        </div>
    );
};
export default CompanyPage;
