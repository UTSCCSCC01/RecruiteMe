import JobSeekerForm from '../components/CreateJobSeekerForm/JobSeekerForm';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import * as React from 'react';
import JobSeekerController from "../controller/JobSeekerController";
import RecruiterController from "../controller/RecruiterController";
import UserController from "../controller/UserController";
import { useNavigate, UseNavigate } from 'react-router-dom';
import RecruiterForm from '../components/CreateJobSeekerForm/RecruiterForm';
import CompanyForm from '../components/CreateCompanyForm/CompanyForm';
import CompanyController from '../controller/CompanyController';
import { Avatar } from '@mui/material';


export default function CompanyPage() {
    const [company, setCompany] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [pfp, setPfp] = React.useState(null);

    React.useEffect(() => {
        let body = "6362c7974da2939b511e266c"
        CompanyController.getCompany(body).then((res) => {
            setCompany(res);
        });
        if(!pfp){
            CompanyController.getPfp(body).then((res)=>{
                const base64String = btoa(
                    new Uint8Array(res.data.data).reduce(function (data, byte) {
                        return data + String.fromCharCode(byte);
                    }, "")
                );
                setPfp(base64String);
            })
        }
    }, []);

    const handleClose = () => {
        setOpen(false);
        window.location.reload(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
        
            {company && (
                <CompanyForm
                pfp={pfp}
                open={open??false}
                close={handleClose}
                companyName={company?.companyName ?? ""}
                about={company?.about ?? ""}
                ></CompanyForm>
            )}
            <Avatar
                    className="profile-pic"
                    src={`data:image/png;base64,${pfp}`} //TODO: display pic
                    sx={{
                        width: 225,
                        height: 225,
                        position: "absolute",
                        top: 125,
                        left: 35,
                        border: "white 4px solid",
                    }}
                />
            <Button
            onClick={handleOpen}
            >Edit Company</Button>
        </div>

    )
}