import * as React from 'react';
import { Button, styled, ListItemButton , ListSubheader , Box , List, ListItem, ListItemAvatar, ListItemText, Avatar, Grid } from '@mui/material';
import { ApplicantTracker } from './ApplicantTracker';
import RecruiterController from '../../controller/RecruiterController';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Modal from "@mui/material/Modal";
import JobPostingForm from '../CreateJobPostingForm/JobPostingForm';
import companyLogo from "../../assets/example-logo.png";

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function JobPostTracker(props) {
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  const [curApps, setCurApps] = React.useState([]);
  const [jobPosts, setJobPosts] = React.useState([]);
  const [openJobPostingForm, setOpenJobPostingForm] = React.useState(false);
  const [profile, setProfile] = React.useState(null)

  React.useEffect(() => {
    RecruiterController.getPost().then((res) =>{
      setJobPosts(res)
    });
    RecruiterController.getRecruiter().then((res) =>{
      setProfile(res[0])
    });
  }, []);

  const handleOpenPostJobForm = () => {
    setOpenJobPostingForm(true);
  };

  const handleCloseJobPostingForm = () => {
    setOpenJobPostingForm(false); window.location.reload(false);
  };
  const handleJobPostClicked = (event, index) => {
    setSelectedIndex(index);
    setCurApps(jobPosts[index].applicants);
  };

  const handleViewMore = () => {
    console.log("View more")
  }
console.log(profile)
  return (
    <div>
      {profile && profile.companyId &&
      <Modal
          open={openJobPostingForm}
          onClose={handleCloseJobPostingForm}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
      >
          <JobPostingForm close={handleCloseJobPostingForm} companyId={profile.CompanyId}></JobPostingForm>
      </Modal>}
      <Grid container >
      <Box sx={{ width: "25%", height: 700,}}>
        <Box sx={{height: 70,}}></Box>
        <Demo>
          <List sx={{ width: '100%', height: '100%',maxWidth: 350}}>
          <ListSubheader sx={{fontSize:20}} color="inherit">My Job Posts
              {profile && profile.companyId &&
              <Button
                    onClick={handleOpenPostJobForm}
                    startIcon={<AddCircleIcon fontSize="large" />}
                    sx={{
                        color: "black",
                        fontSize: "20px",
                        fontWeight: "400",
                        textTransform: "none",
                        marginLeft: "66px",
                    }}
                    size="145px"
                >
                New
              </Button>}
            </ListSubheader>
            
            {jobPosts && jobPosts.map(item => (
              <ListItemButton
                key={item._id}
                selected={selectedIndex === jobPosts.indexOf(item)}
                onClick={(event) => handleJobPostClicked(event, jobPosts.indexOf(item))}
              >
                <ListItem key={item._id} disableGutters>
                  <ListItemAvatar>
                    <Avatar variant="square" src={companyLogo} sx={{ width: 80, height: 80 }}>{item.avatar}</Avatar>
                  </ListItemAvatar>
                  <ListItemText 
                    sx={{ paddingLeft: 2}}
                    primary={item.role}
                    secondary={item.numofApplicants+" Applicants"}
                  />
                </ListItem>
              </ListItemButton>
            ))}

          </List>
        </Demo>
      </Box>

      <Box sx={{ width: "75%", maxHeight: 635,}}>
        <Box sx={{height: 70,}}></Box>
        <List style={{ overflow: 'auto'}}>
          <Box style={{display:'flex'}}>
            <Box sx={{width:150,}}>
              <ListSubheader sx={{fontSize:20}} color="inherit" >Job Seekers</ListSubheader>
            </Box>
            <Box sx={{
              width: "87%",
              display:'flex',
              justifyContent:'flex-end',
              }}>
              <Button onClick = {() => handleViewMore()}>View More -{'>'}</Button>
            </Box>
          </Box>

          {curApps.map(item => (
            <ApplicantTracker key={item}
            applicant = {item}>
            </ApplicantTracker>
          ))}

          </List>
        </Box>
      </Grid>
    </div>
  );
}