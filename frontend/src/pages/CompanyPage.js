import Button from '@mui/material/Button';
import * as React from 'react';
import CompanyForm from '../components/CreateCompanyForm/CompanyForm';
import CompanyController from '../controller/CompanyController';
import { Avatar } from '@mui/material';
import RecruiterController from '../controller/RecruiterController';

export default function CompanyPage() {
    const [company, setCompany] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [pfp, setPfp] = React.useState(null);
    const [disabled, setDisabled] = React.useState(true);
    React.useEffect(() => {
        RecruiterController.getRecruiter().then((res) => {
            console.log(res[0].companyId)
            if(res[0].companyId != null){
                CompanyController.getCompany(res[0].companyId).then((res2) => {
                    if(res2 != 400){
                        setCompany(res2);
                    } else{
                        console.log("No company")
                    }
                });
                CompanyController.getPfp(res[0].companyId).then((res2)=>{
                    const base64String = btoa(
                        new Uint8Array(res2.data.data).reduce(function (data, byte) {
                            return data + String.fromCharCode(byte);
                        }, "")
                    );
                    setPfp(base64String);
                })
            }else{
                setDisabled(false);
            }
        })
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
        
            {(
                <CompanyForm
                pfp={pfp}
                companyId={company?._id ?? ""}
                open={open??false}
                disabled={disabled??true}
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