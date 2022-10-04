import React, {useState} from 'react';
import './App.css';
import { Container } from '../components/Container';
import Avatar from '@mui/material/Avatar';

const App = () => {
  const [profile, setProfile] = useState({
    fname: '',
    lname: '',
    email: '',
    number:'',
    bio:'',
    pfp:''
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.pfp.value)
    setProfile({
      fname: event.target.fname.value,
      lname: event.target.lname.value,
      email: event.target.email.value,
      number: event.target.number.value,
      bio: event.target.bio.value,
      pfp: event.target.pfp.value
    })
  };
  return (
    <div className="App">
      <Avatar alt="profile pic" src={profile.pfp} sx={{ width: 206, height: 206 }}/>
      <br></br>
      <h4>
      Name: {profile.fname} {profile.lname}
      <br></br>
      email: {profile.email}
      <br></br>
      number: {profile.number}
      <br></br>
      bio: {profile.bio}
      </h4>
      <Container onSubmit={onSubmit} profile={profile.fname}/>
    </div>
  );
};

export default App;
