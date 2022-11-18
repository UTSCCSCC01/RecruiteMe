import React from "react";
import {
  Avatar,
  Box,
  Grid,
  Button,
  Paper,
  CardMedia,
  Typography,
  Card,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import CompanyController from "../../controller/CompanyController";
import { useNavigate } from "react-router-dom";
import { status2text } from "./StatusTypes";
import UserController from "../../controller/UserController";
import JobSeekerController from "../../controller/JobSeekerController";

/*
types are "tracker" and "page" for variance in the application tracker and
the my applications page.
*/
function TrackerCard({ post, type }) {
  const [companyLogo, setCompanyLogo] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const navigate = useNavigate();

  const handleCompleteOA = (event) => {
    event.stopPropagation()
    JobSeekerController.updateApplicationStatus({
      uid: user._id,
      postId: post.data._id,
      status: 5
    })
    window.location.reload();
    ;
  };
  const handleOpen = (event) => {
    event.stopPropagation()
  }
  React.useEffect(() => {
    UserController.getCurrent().then((res) => {
      setUser(res)
    })
    if (!companyLogo) {
      CompanyController.getPfp(post.data.companyId).then((res) => {
        const base64String = btoa(
          new Uint8Array(res.data.data).reduce(function (data, byte) {
            return data + String.fromCharCode(byte);
          }, "")
        );
        setCompanyLogo(base64String);
      });
    }
  }, []);
  return (
    <Card
      style={
        type === "tracker"
          ? { cursor: "pointer" }
          : { backgroundColor: "#D9D9D9" }
      }
      onClick={
        type === "tracker"
          ? () => {
            navigate("/job", { state: { jobId: post.data._id } });
          }
          : ""
      }
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={2}
        padding={2}
      >
        <Grid item xs={5}>
          <Avatar
            media="picture"
            variant="rounded"
            alt={post.data.companyName}
            src={`data:image/png;base64,${companyLogo}`}
            sx={{
              width: 90,
              height: 90,
              border: "1px solid #cacacc",
              backgroundColor: "white",
              color: "#91A4E8",
              fontSize: 58,
              alignSelf: "center",
              padding: "10px",
              cursor: "pointer",
            }}
          />
        </Grid>
        <Grid item xs={7}>
          <Typography variant="subtitle1">
            {post.data.role}
            <CircleIcon
              sx={{ fontSize: 10, margin: "0 5px 0 5px" }}
            />
            {post.data.companyName}
          </Typography>
          <Typography variant="body2">
            {status2text[post.status]}
          </Typography>
          {post.status === 4 && post.assesmentLink ?
            type == "tracker" ?
              <div>
                <Button variant="contained" onClick={handleOpen} href={post.assesmentLink} target="_blank" sx={{ textTransform: 'none', fontSize: '12px', backgroundColor: "#91a4e8" }}>Open Assessment</Button>
                <Button variant="contained" onClick={handleCompleteOA} target="_blank" sx={{ textTransform: 'none', fontSize: '12px', backgroundColor: "#91a4e8", marginTop: 1 }}>Complete OA</Button>
              </div>
              : <div>
                <Button variant="contained" href={post.assesmentLink} target="_blank" sx={{ textTransform: 'none', fontSize: '12px', backgroundColor: "#91a4e8", marginTop: 1 }}>Open Assessment</Button>
                <Button variant="contained" onClick={handleCompleteOA} target="_blank" sx={{ textTransform: 'none', fontSize: '12px', backgroundColor: "#91a4e8", marginTop: 1, left: 5}}>Complete OA</Button>
              </div>

            : null}
          {type === "page" ? (
            <Typography variant="subtitle1" fontWeight={"bold"}>
              Deadline: {new Date(post.data.deadline).toDateString()}
            </Typography>
          ) : (
            ""
          )}
        </Grid>
        {type === "page" ? (
          <Grid item xs={12} textAlign="center">
            <Typography
              sx={{ cursor: "pointer" }}
              color={"#91A4E8"}
              onClick={() => {
                navigate("/job", { state: { jobId: post.data._id } });
              }}
            >
              View Job Posting
            </Typography>
          </Grid>
        ) : (
          ""
        )}
      </Grid>
    </Card>
  );
}

export default TrackerCard;
