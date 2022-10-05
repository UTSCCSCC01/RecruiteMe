import React from "react";
import background from "../../assets/background.jpg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Collapse, IconButton } from "@mui/material";
import { useState, useEffect } from "react";
function Header() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  const mainStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    display: "flex",
    flexWrap: "wrap",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  return (
    <div className="header" id="header" style={mainStyle}>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1500 } : {})}
        collapsedSize={50}
      >
        <h1
          style={{ fontSize: "4.5rem", color: "whitesmoke", marginBottom: "0" }}
        >
          <span style={{ color: "#91A4E8" }}>Recruit</span>Me
        </h1>
        <h2 style={{ fontSize: "2rem", color: "whitesmoke" }}>
          Recruitment <span style={{ color: "#91A4E8" }}>Made Simple</span>
        </h2>
        <IconButton href="#about">
          <ExpandMoreIcon style={{ fontSize: "4rem", color: "#F26419" }} />
        </IconButton>
      </Collapse>
    </div>
  );
}

export default Header;
