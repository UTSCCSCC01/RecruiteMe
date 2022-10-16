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
import { ListItemButton } from '@mui/material';
import Button from '@mui/material/Button';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function ReviewApplicationsPage() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [curApps, setCurApps] = React.useState([{
    text: 'App',
    primary: 'Post Title1',
    secondary: 'Post description',
    avatar: < DeleteIcon/>,
    jobSeekerId: 1
  },

  ]);
  const jobPosts = [{
    text: 'Post',
    primary: 'Post Title1',
    secondary: 'Post description',
    avatar: <FolderIcon />,
    postId: 1
  },
  {
    text: 'Post2',
    primary: 'Post Title2',
    secondary: 'Post description',
    avatar: <FolderIcon />,
    postId: 2
  },
  {
    text: 'Post3',
    primary: 'Post Title3',
    secondary: 'Post description',
    avatar: <FolderIcon />,
    postId: 3
  },
  {
    text: 'Post4',
    primary: 'Post Title4',
    secondary: 'Post description',
    avatar: <FolderIcon />,
    postId: 4
  }
  ]

  const handleJobPostClicked = (event, index) => {
    setSelectedIndex(index);
    updateApplicants(index);
    console.log("Job Post "+index+" Clicked!")
  };

  const handleAppClicked = (event, index) => {
    console.log("Applicant "+index+" Clicked!")
  }

  const handleViewMore = () => {
    console.log("View more")
  }

  const updateApplicants = (index) => {
    //Fetch data from backend based on postId, get list of applicants that match
    
    setCurApps([{
      text: index,
      primary: index,
      secondary: 'Post description',
      avatar: < DeleteIcon/>,
      jobSeekerId: index+1
    },
    {
      text: index+1,
      primary: index+1,
      secondary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      avatar: < DeleteIcon/>,
      jobSeekerId: index+2
    }])
    console.log(curApps)
  }

  return (
    <div>
      <Grid container >
      <Box 
        sx={{
          width: 300,
          height: 200,
        }}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          My Job Posts
        </Typography>
        <Demo>
          <List>
            {jobPosts.map(item => (
              <ListItemButton
                selected={selectedIndex === item.postId}
                onClick={(event) => handleJobPostClicked(event, item.postId)}
              >
              <ListItem 
                key={item.text}>
                <ListItemAvatar>
                  <Avatar sx={{ width: 60, height: 60 }}>
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
          width: 600,
          height: 10,
        }}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Job Seekers
        </Typography>
        <List>
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