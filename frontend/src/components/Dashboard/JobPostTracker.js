import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { ListItemButton , ListSubheader } from '@mui/material';
import Button from '@mui/material/Button';
import RecruiterController from "../../controller/RecruiterController";
import JobSeekerController from "../../controller/JobSeekerController";

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function JobPostTracker() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [curApps, setCurApps] = React.useState([]);
  const [curJobSeeker, setJobSeeker] = React.useState([]);
  const [curJobSeekerPfp, setJobSeekerPfp] = React.useState(null);
  const [jobPosts, setJobPosts] = React.useState([]);

  const handleJobPostClicked = (event, index) => {
    setSelectedIndex(index);
    setCurApps([]);
    updateApplicants(index);
    console.log("Job Post "+index+" Clicked!")
  };

  const handleAppClicked = (event, index) => {
    console.log("Applicant "+index+" Clicked!")
  }

  const handleViewMore = () => {
    console.log("View more")
  }

  React.useEffect(() => {
    RecruiterController.getPost().then((res) =>{
      console.log(res)
    });
  }, []);

  const updateApplicants = (index) => {
    //Fetch data from backend based on postId, get list of applicants that match
    jobPosts[index].applicants.forEach(item => 
      //How to get info of applicants off this, placeholder below
      setJobSeeker(JobSeekerController.getJobSeeker(item)),
      
      JobSeekerController.getPfp().then((res) => {
        const base64String = btoa(new Uint8Array(res.data.data).reduce(function (data, byte) {
            return data + String.fromCharCode(byte);
        }, ''));
        setJobSeekerPfp(base64String)
      }),

      setCurApps(curApps.concat([{
        text: curJobSeeker.firstName,
        primary: curJobSeeker.firstName,
        secondary: curJobSeeker.bio,
        avatar: curJobSeekerPfp,
        jobSeekerId: curJobSeeker.uid
      }]))
      
      );
    
    console.log(curApps)
  }

  return (
    <div>
      <Grid container >
      <Box 
        sx={{
          width: "25%",
          height: 200,
        }}
        >
        <Box
          sx={{
            height: 70,
          }}>
        </Box>
        <Demo>
          <List sx={{ width: '100%', maxWidth: 350}}>
            <ListSubheader sx={{fontSize:20}} color="inherit">
              My Job Posts
            </ListSubheader>
            {jobPosts.map(item => (
              <ListItemButton
                selected={selectedIndex === jobPosts.indexOf(item)}
                onClick={(event) => handleJobPostClicked(event, selectedIndex)}
              >
              <ListItem 
                key={item.text}
                disableGutters>
                <ListItemAvatar>
                  <Avatar variant="square" sx={{ width: 80, height: 80 }}>
                    {item.avatar}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText sx={{ paddingLeft: 2}}
                  primary={item.primary}
                  secondary={item.secondary}
                />
              </ListItem>
              </ListItemButton>
            ))}
          </List>
        </Demo>
      </Box>

      <Box 
        sx={{
          width: "72%",
          height: 10,
        }}>
        <Box sx={{height: 70,}}></Box>
        <List>
          <Box style={{display:'flex'}}>
            <Box sx={{width:150,}}>
              <ListSubheader sx={{fontSize:20}} color="inherit">
                Job Seekers
              </ListSubheader>
            </Box>
            <Box sx={{
              width: "87%",
              display:'flex',
              justifyContent:'flex-end',
              }}>
            <Button onClick = {() => handleViewMore()}>
              View More -{'>'}
            </Button>
            </Box>
          </Box>
          
          {curApps.map(item => (
            <div>
            <ListItem 
              
              key={item.text}>
              <ListItemAvatar>
                <Avatar sx={{ width: 100, height: 100 }}>
                  {item.avatar}
                </Avatar>
              </ListItemAvatar>
              <ListItemText 
                sx={{ paddingLeft: 2}}
                primary={<Typography variant="h4" style={{ color: '#000000' }}>{item.primary}</Typography>}
                secondary={item.secondary}
              />
            </ListItem>
            <Box style={{display:'flex', justifyContent:'flex-end'}}>
              <Button onClick = {() => handleViewMore()}>
                View Profile -{'>'}
              </Button>
            </Box>
            
            </div>
          ))}
        </List>
      </Box>
      </Grid>
    </div>
  );
}