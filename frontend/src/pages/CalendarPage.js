import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import * as React from 'react';
import { useCallback } from 'react';
import "react-big-calendar/lib/css/react-big-calendar.css"
import {
  Box,
  Button,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import UserController from "../controller/UserController";
import RecruiterController from "../controller/RecruiterController";
import JobSeekerController from "../controller/JobSeekerController";
import PostController from '../controller/PostController';
import { maxWidth } from '@mui/system';

const localizer = momentLocalizer(moment)

export default function CalendarPage() {
  const navigate = useNavigate()
  const [events, setEvents] = React.useState([])
  const [done, setDone] = React.useState(false)
  const [isRecruiter, setIsRecruiter] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const [selectedEvent, setSelectedEvent] = React.useState(null);

  const handleBack = () => {
    navigate("/dashboard");
  };


  const test = [{
    title: "bruh",
    start: new Date(),
    end: new Date(2022, 10, 17)
  }]
  

  React.useEffect(() => {
    UserController.getCurrent().then((res) => {
      if (res.recruiter) {
        setIsRecruiter(true);
        RecruiterController.getRecruiter().then((res) => {
          setUser(res[0]);
          console.log(res[0])
        });
      } else {
        JobSeekerController.getJobSeeker().then((res) => {
          res[0].appliedPost.map((post) =>{
            PostController.getPost(post.postId).then((res2) =>{
              setEvents(cur => [
                ...cur, 
                {
                title: "Interview with "+res2.companyName+" at "+post.assesmentLink,
                start: new Date(post.interviewDate),
                end: new Date(post.interviewDate).setHours(new Date(post.interviewDate).getHours() + 1),
                }
              ]);
            });
          })
        });
      }
    });
    setDone(true)
  }, []);

  const onSelectEvent = useCallback((calEvent) => {
    setSelectedEvent(calEvent)
    console.log(calEvent)
  }, [])

  return(
    <div>
      <Box
        sx={{
          width: "100%",
          height: 76,
          backgroundColor: "#91A4E8",
          position: "absolute",
          top: 0,
          zIndex: 1,
        }}
      >
        <Button
          onClick={handleBack}
          startIcon={<ArrowBackIcon fontSize="large" />}
          sx={{
              top: 15,
              left: 20,
              color: "white",
              fontSize: "20px",
              fontWeight: "400",
              textTransform: "none",
          }}
          size="145px"
        ></Button>
      </Box>
      <Box
        sx={{
          color: "white",
          height: 75,
        }}
      ></Box>
      {events.length != 0 && 
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          onSelectEvent={onSelectEvent}
          style={{height: 500, margin: "5px"}}
        ></Calendar>}
      {selectedEvent &&
      <Box
        sx={{width: maxWidth}}
        minHeight="100px"
        display="flex"
        alignItems="center"
        justifyContent="center">
        <Box
          sx={{backgroundColor: "#ffffff"}}>
          Event: {selectedEvent.title}
          <div>Start Time: {selectedEvent.start.toString()}</div>
          <div>Duration: 1hr</div>
        </Box>
      </Box>}
    </div>
  )
}