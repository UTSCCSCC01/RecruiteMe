import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import React from "react";

function ContactUs() {
  const mainStyle = {
    minHeight: "100vh",
    backgroundColor: "#A9ADDD",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={mainStyle} id="contact">
      <Paper
        sx={{
          width: "25%",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h3" gutterBottom>
          Contact Us
        </Typography>
        <TextField
          sx={{ mb: 3 }}
          label="Name"
          variant="filled"
          required
        ></TextField>
        <TextField
          sx={{ mb: 3 }}
          label="Email"
          variant="filled"
          required
        ></TextField>
        <TextField
          sx={{ mb: 3 }}
          label="Message"
          rows={4}
          multiline
          required
        ></TextField>
        <Button type="submit" variant="outlined" size="large" color="inherit" >
          Submit
        </Button>
      </Paper>
    </div>
  );
}

export default ContactUs;
