import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Tooltip, IconButton, Avatar, Menu, MenuItem } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import whitelogo from "../assets/WhiteLogo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserController from "../controller/UserController";

const settings = [
  { name: "Profile", nav: "/profile" },
  { name: "Settings", nav: "/settings" },
  { name: "Logout" },
];
//types (landing, recruiter, jobseeker)
export default function Navbar({ type, pfp, sections }) {
  //style={{ backgroundColor: "#91A4E8" }}

  const [navActive, setNavActive] = useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Send email and password to backend using post request
    navigate("/login");
  };
  const handleSignup = (e) => {
    e.preventDefault();
    // Send email and password to backend using post request
    navigate("/signup");
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout = () => {
    UserController.logout().then((res) => {
      navigate("/");
    });
  };
  return (
    <AppBar
      position="fixed"
      style={
        navActive
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "#91A4E8" }
      }
    >
      <Toolbar>
        <Typography
          sx={{ mr: 2 }}
          variant="h6"
          component="div"
          style={{ textAlign: "left" }}
        >
          <img src={whitelogo} width={250} style={{ marginTop: 5 }}></img>
        </Typography>
        <Box sx={{ display: "flex", flexGrow: 1 }}>
          {sections.map((section) => (
            <Button
              key={section.title}
              onClick={null}
              sx={{ my: 2, color: "white", display: "block" }}
              href={section.href}
            >
              {section.title}
            </Button>
          ))}
        </Box>
        {type === "landing" ? (
          <>
            <Button
              color="inherit"
              variant="outlined"
              onClick={handleLogin}
              sx={{ mr: 1 }}
            >
              Login
            </Button>
            <Button color="inherit" variant="outlined" onClick={handleSignup}>
              Sign Up
            </Button>
          </>
        ) : (
          //profile icon button clickable
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {pfp == null ? (
                  <PersonOutlineIcon sx={{ width: 55, height: 55 }} />
                ) : (
                  <Avatar
                    alt="pfp"
                    src={`data:image/png;base64,${pfp}`}
                    sx={{ width: 55, height: 55 }}
                  />
                )}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting.name}
                  onClick={
                    setting.name != "Logout"
                      ? () => {
                          navigate(setting.nav);
                        }
                      : handleLogout
                  }
                >
                  <Typography textAlign="center">{setting.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
