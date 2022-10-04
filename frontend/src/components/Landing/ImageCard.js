import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Collapse } from "@mui/material";

export default function ImageCard({img, data, checked, margin}) {
  return (
    <Collapse in={checked}  {...(checked ? { timeout: data.time } : {})}>
      <Card sx={{ maxWidth: 545, margin: margin }} variant={"outlined"}>
        <CardMedia
          component="img"
          height="340"
          image={img}
          alt=""
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign={"center"}
          >
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign={"left"}>
            {data.body}
          </Typography>
        </CardContent>
      </Card>
    </Collapse>
  );
}
