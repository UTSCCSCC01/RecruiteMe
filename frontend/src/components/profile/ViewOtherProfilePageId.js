import { OthersProfile } from "./components/OthersProfile";
import * as React from "react";
import JobSeekerController from "../../controller/JobSeekerController";
import RecruiterController from "../../controller/RecruiterController";
import { useLocation } from "react-router-dom";

export const ViewOthersProfile = (props) => {
    const [user, setUser] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const uid = window.location.pathname.split("/")[2];
    const { state } = useLocation();
    const { isRecruiter } = state;

    React.useEffect(() => {
        if (isRecruiter) {
            RecruiterController.viewId(uid).then((res) => {
                setUser(res[0]);
            });
        } else {
            JobSeekerController.viewId(uid).then((res) => {
                setUser(res[0]);
            });
        }
    }, [uid]);

    return (
        <OthersProfile
            firstName={user?.firstName ?? ""}
            lastName={user?.lastName ?? ""}
            email={email}
            isRecruiter={isRecruiter}
            company={user?.company ?? ""}
            bio={user?.bio ?? ""}
            workExperience={user?.workExperience ?? ""}
            education={user?.education ?? ""}
            status={user?.currStatus ?? ""}
            skills={user?.skills ?? ""}
        />
    );
};

