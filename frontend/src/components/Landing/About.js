import React from "react";
import ImageCard from "./ImageCard";
import recruiter from "./recruiter.jpg";
import jobSeeker from "./jobSeeker.jpg";
import { productAboutData } from "./productAboutData";
import useWindowPosition from "./useWindowPosition";
import Typography from "@mui/material/Typography";
import { breakpoints } from "@mui/system";

function About() {
  const mainStyle = {
    minHeight: "100vh",
    backgroundColor: "whitesmoke",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const checked = useWindowPosition("header");
  return (
    <div className="about" id="about" style={mainStyle}>
      <div
        className="wrapper"
        style={{
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: "white",
          borderRadius: "1rem",
          padding: "2rem",
          justifyContent: "center",
          boxShadow: "8px 3px 21px -2px rgba(0,0,0,0.66)",
          minHeight: "70vh",
          maxWidth: "80vw",
          margin: "2rem"
        }}
      >
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          textAlign={"center"}
          width="100%"
        >
          What We Provide
        </Typography>
        <ImageCard
          img={jobSeeker}
          data={productAboutData[0]}
          margin={2}
          checked={checked}
        />
        <ImageCard
          img={recruiter}
          data={productAboutData[1]}
          margin={2}
          checked={checked}
        />
      </div>
    </div>
  );
}

export default About;
