import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './LogoTransparent.png';
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"#91A4E8"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{textAlign:'center'}}>
            <img src={logo} width={250} style={{marginTop:5}}></img>
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Sign Up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
