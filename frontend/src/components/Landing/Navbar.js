import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import whitelogo from "./WhiteLogo.png";
import { useState } from "react";
const sections = [{title:"Home", href:"#header"}, {title:"About", href:"#about"}, {title:"Contact Us", href:"#contact"}];

export default function Navbar() {
  //style={{ backgroundColor: "#91A4E8" }}
  const [navActive, setNavActive] = useState(false);

  return (
    <AppBar
      position="sticky"
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

        <Button color="inherit" variant="outlined" sx={{ mr: 1 }}>
          Login
        </Button>
        <Button color="inherit" variant="outlined">
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
}
