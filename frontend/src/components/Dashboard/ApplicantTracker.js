import { Box, Button, ListItem, ListItemAvatar, Typography, Avatar, ListItemText, } from '@mui/material'
import React from 'react';
import JobSeekerController from '../../controller/JobSeekerController';

export const ApplicantTracker = (props) =>{
  const [applicant, setApplicant] = React.useState({})
  const [pfp, setPfp] = React.useState(null);

  React.useEffect(() => {
    const temp = null;
    JobSeekerController.getPfpid(props.applicant).then((res) => {
        const base64String = btoa(new Uint8Array(res.data.data).reduce(function (data, byte) {
            return data + String.fromCharCode(byte);
        }, ''));
        setPfp(base64String)
    });
    JobSeekerController.viewId(props.applicant).then((res) => {
      setApplicant({
          fname: res[0].firstName,
          lname: res[0].lastName,
          bio: res[0].bio,
      })
    })
  }, [props]);

  const handleViewMore = () => {
    console.log("View more")
  }

  return (
        <div>
        <ListItem sx = {{paddingTop: 4, backgroundColor: "#d9d9d9"}}>
        <ListItemAvatar>
          <Avatar sx={{ width: 150, height: 150 }} src={`data:image/png;base64,${pfp}`}></Avatar>
        </ListItemAvatar>
        <ListItemText 
          sx={{ paddingLeft: 2}}
          primary={<Typography variant="h5" style={{ verticalAlign: "bottom", color: '#000000' }}>{applicant.fname} • {applicant.lname}</Typography>}
          secondary={<Typography sx={{textOverflow: "ellipsis", height: 170, overflow: "hidden"}}>{applicant.bio}</Typography>}
        />
      </ListItem>
      <Box style={{backgroundColor: "#d9d9d9", display:'flex', justifyContent:'flex-end'}}>
        <Button onClick = {() => handleViewMore()}>
          View Profile -{'>'}
        </Button>
      </Box>
      <Box sx={{height: 30}}></Box>
      </div>
    )
}