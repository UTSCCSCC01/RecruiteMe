import { Profile } from "./components/Profile2";
import * as React from "react";
import JobSeekerController from "../../controller/JobSeekerController";


export const ProfilePageId = () => {
  const [user, setUser] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const uid = window.location.pathname.split("/")[2]

  React.useEffect(() => {
    JobSeekerController.viewId(uid).then((res) => {
        setUser(res[0]);
    });
  }, []);
  
  return (
    <Profile
        firstName={user?.firstName ?? ""}
        lastName={user?.lastName ?? ""}
        email={email}
        isRecruiter={false}
        company={user?.company ?? ""}
        bio={user?.bio ?? ""}
        workExperience={user?.workExperience ?? ""}
        education={user?.education ?? ""}
        status={user?.currStatus ?? ""}
        skills={user?.skills ?? ""}
    />
);
}