import React from "react";
import { Box, Grid, Paper, CardMedia, Typography, Card } from "@mui/material";
import defaultLogo from "../../assets/defaultcompany.png";
import CircleIcon from "@mui/icons-material/Circle";

const status2text = ["Under Review", "Interview Scheduled", "Rejected"]
function TrackerCard({ post }) {
  return (
    <Card>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={2}
        padding={2}
      >
        <Grid item xs={5}>
          <CardMedia
            component="img"
            media="picture"
            alt="logo"
            src={defaultLogo}
          />
        </Grid>
        <Grid item xs={7}>
          <Typography variant='subtitle1'>
            {post.data.role}
            <CircleIcon sx={{ fontSize: 10, margin: "0 5px 0 5px" }} />
            {post.data.companyName}
          </Typography>
          <Typography variant='body2'>
            {status2text[post.status]}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}

export default TrackerCard;
