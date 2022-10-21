import { Profile } from "./components/Profile";
import * as React from "react";
import UserController from "../../controller/UserController";
import RecruiterController from "../../controller/RecruiterController";
import JobSeekerController from "../../controller/JobSeekerController";

export const ProfilePage = () => {
    const [isRecruiter, setIsRecruiter] = React.useState(false);
    const [user, setUser] = React.useState(null);
    const [email, setEmail] = React.useState(null);

    React.useEffect(() => {
        UserController.getCurrent().then((res) => {
            setEmail(res.email);
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
    }, []);

    return (
        <div>
            {user && (
                <Profile
                    firstName={user?.firstName ?? ""}
                    lastName={user?.lastName ?? ""}
                    email={email}
                    isRecruiter={isRecruiter}
                    company={user?.company}
                    bio={user?.bio}
                    workExperience={user?.workExperience}
                    education={user?.education}
                    status={user?.currStatus}
                    skills={user?.skills}
                />
            )}
        </div>
    );
};
export default ProfilePage;
