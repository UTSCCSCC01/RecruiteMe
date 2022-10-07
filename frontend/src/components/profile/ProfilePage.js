import { Profile } from "./components/Profile";
import * as React from "react";
import UserController from "../../controller/UserController";
import RecruiterController from "../../controller/UserController";
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
                RecruiterController.getRecruiter().then((res) => setUser(res));
            } else {
                JobSeekerController.getJobSeeker().then((res) => {
                    setUser(res[0]);
                });
            }
        });
    }, []);

    return (
        <Profile
            firstName={user?.firstName}
            lastName={user?.lastName}
            email={email}
            isRecruiter={isRecruiter}
            company={user?.company}
            bio={user?.bio}
            workExperience={user?.workExperience}
            education={user?.education}
            status={user?.currStatus}
            skills={user?.skills}
            // name={"john smith"}
            // email={"john@mail.com"}
            // isRecruiter={isRecruiter}
            // company={"google"}
            // bio={"abc"}
            // workExperience={user?.workExperience}
            // status={"lookin for a job"}
        />
    );
};
export default ProfilePage