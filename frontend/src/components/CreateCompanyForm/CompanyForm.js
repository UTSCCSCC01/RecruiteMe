import React, { useState, useRef } from 'react';
import { Grid, Paper, TextField, Button, Avatar } from '@mui/material'
import CompanyController from "../../controller/CompanyController";
import RecruiterController from "../../controller/RecruiterController";
import Modal from '@mui/material/Modal';
import EditIcon from "@mui/icons-material/Edit";


const CompanyForm = (props) => {
  const [profileFormValues, setProfileFormValues] = useState({ about: props.about, companyName: props.companyName })
  const [notNewProfile, setNotNewProfile] = useState(props.companyName)
  const [selectedPicture, setSelectedPicture] = useState();
  const [selectedPictureURL, setSelectedPictureURL] = useState(props.pfp ? `data:image/png;base64,${props.pfp}` : null);
  const pfpExist = props.pfp != null
  const [isPictureClicked, setIsPictureClicked] = useState(false);
  const PictureInput = useRef(null);
  const [error, setError] = React.useState(false);

  const handlePictureClick = event => {
    PictureInput.current.click();
  };

  const handlePictureChange = event => {
    setSelectedPicture(event.target.files[0]);
    setSelectedPictureURL(URL.createObjectURL(event.target.files[0]))
    setIsPictureClicked(true)
  };

  let handleProfileChange = (event) => {
    const { name, value } = event.target;
    setProfileFormValues(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  let handleSubmit = (event) => {
    event.preventDefault()
    let body = notNewProfile ? {
      "about": profileFormValues.about,
      "companyId": props.companyId,
    } : {
      "about": profileFormValues.about,
      "companyName": profileFormValues.companyName,
    }
    if (selectedPicture != null && isPictureClicked && props.companyId) {
      if (pfpExist) {
        CompanyController.updatePfp(selectedPicture, props.companyId)
      } else {
        CompanyController.addPfp(selectedPicture, props.companyId)
      }
    }

    if (notNewProfile) {
      CompanyController.updateCompany(body).then((res) => { if (!res.status) { props.close()} });
    } else {
      CompanyController.addCompany(body).then((res) => {
        if (res.status == 403) {
          setError(true);
        }
        else if (selectedPicture != null && isPictureClicked) {
          RecruiterController.getRecruiter().then((res) => {
            CompanyController.addPfp(selectedPicture, res[0].companyId).then((res) => {props.close()});
          });
        }else{
          props.close();
        }
      });
    }
  }


return (
  <Grid>
    <Paper elevation={0}
      sx={{ textAlign: "center", border: 2, borderColor: "#91a4e8", paddingLeft: 2, paddingRight: 1, paddingTop: 1, paddingBottom: 3, borderRadius: 2, height: '50%', width: '40%', margin: "100px auto" }}
    >
      <form onSubmit={handleSubmit}>
        <div style={{ maxHeight: 450, overflow: 'auto', overflowX: 'hidden' }}>
          <Grid align='center' fontSize={19}>
            <h2>Company Details</h2>
          </Grid>
          <div style={{ display: 'flex-row', alignItems: 'center', justifyContent: 'center' }}>
            <input
              ref={PictureInput}
              type="file"
              onChange={handlePictureChange}
              accept="image/png, image/jpeg"
              style={{ display: 'none' }}
            />
            <img style={{ width: 282 / 2, height: 319 / 2 }} alt="" src={selectedPictureURL ? selectedPictureURL : require('../../assets/JobSeekerFormImageUpload.png')} onClick={() => handlePictureClick()} />

          </div>
          <div>
            <TextField
              label='Company Name'
              placeholder='Enter Company Name'
              fullWidth
              name='companyName'
              disabled={props.disabled}
              error={error}
              value={profileFormValues.companyName}
              sx={{ left: 0, width: '90%', paddingBottom: "1em" }}
              InputProps={{ sx: { backgroundColor: "#f3f1f1" } }}
              onChange={e => handleProfileChange(e)}
              required

            />
          </div>
          <div>
            <TextField
              label='About'
              placeholder='Enter company descriptions'
              name='about'
              value={profileFormValues.about}
              sx={{ width: '90%', left: 0, paddingBottom: "1em", }}
              InputProps={{ sx: { height: 125, backgroundColor: "#f3f1f1" } }}
              onChange={e => handleProfileChange(e)}
              fullWidth
              multiline
              rows={4}
              required
            />
          </div>
        </div>
        <div >
          <Button type='submit' color='secondary' variant='filled' sx={{ borderRadius: 3, left: '38%', width: '18%', height: 45, backgroundColor: "#91a4e8", textTransform: 'none', color: "#FFFFFF", fontSize: 19 }} fullWidth>Save</Button>
        </div>
      </form>
    </Paper>
  </Grid>
);
}
export default CompanyForm