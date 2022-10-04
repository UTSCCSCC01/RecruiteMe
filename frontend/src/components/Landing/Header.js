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
          Recruit<span style={{ color: "#91A4E8" }}>Me</span>
        </h1>
        <h2 style={{ fontSize: "2rem", color: "whitesmoke" }}>
          Recruitment Made Simple
        </h2>
        <IconButton href="#about">
          <ExpandMoreIcon style={{ fontSize: "4rem", color: "#F26419" }} />
        </IconButton>
      </Collapse>
    </div>
  );
}

export default Header;
