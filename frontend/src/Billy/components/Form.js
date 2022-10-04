import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Avatar from '@mui/material/Avatar';

export const Form = ({ onSubmit , profile}) => {
  const [profile2, setProfile] = useState(profile);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div><label style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }}><h1>Profile Details</h1></label>

    <form onSubmit={onSubmit}>
      <Stack spacing={2} direction="row">
      <Box>
      <Avatar alt="profile pic" src={selectedImage} sx={{ width: 206, height: 206 }}/>
      <IconButton style={{
          zIndex:1,
          position: "absolute",
          top: 10,
          left: 0,
          margin: 206,
          backgroundColor: '#91A4E8'
          }} color="primary" aria-label="upload picture" component="label">
        <input id='pfp' hidden accept="image/*" type="file" onChange={(event) => {
          setSelectedImage(URL.createObjectURL(event.target.files[0]));
        }}/>
        <PhotoCamera style={{fill:"white" }} sx={{ width: 46, height: 46 }}/>
        </IconButton>
      </Box>
      
      <Box>
      <div className="form-group">
      
        <TextField 
            className="form-control" 
            placeholder='First Name'
            defaultValue = {profile2}
            id="fname" />
        <label>&nbsp;&nbsp;&nbsp;</label>
        <TextField 
            className="form-control" 
            placeholder='Last Name'
            id="lname" />
      </div>
      
      <div className="form-group">
        <TextField
          type="email"
          className="form-control"
          id="email"
          placeholder="Email"
          fullWidth
          margin="normal"
        />
      </div>
      <div className="form-group">
        <TextField
          margin='dense'
          type="number"
          fullWidth
          className="form-control"
          id="number"
          placeholder="Phone Number"
        />
      </div>
      </Box>
      </Stack>

      <div className="form-group">
      <TextField 
        fullWidth
        margin="normal"
        id="bio"
        label="Short Bio" 
        type="bio"
        multiline
        rows={4}
        className="form-control"/>
      </div>
      <div 
        className="form-group"
        style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
        }}>
        
      </div>
      <div
        className="form-group"
        style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
        }}>
          <Button variant="outlined" component="label" sx={{width: 275, color: "#96a8e8", backgroundColor: "#ebe8e8"}}>
        Upload resume
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      </div>
      <div 
        className="form-group"
        style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
        }}>
        <Button
            variant="contained"
            className="form-control btn btn-primary" 
            type="submit"
            sx={{backgroundColor: "#91A4E8"}}
            >
          Save
        </Button>
      </div>
    </form>
    </div>
  );
};
export default Form;