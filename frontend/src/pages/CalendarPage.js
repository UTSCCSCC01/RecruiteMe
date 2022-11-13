import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import * as React from 'react';
import "react-big-calendar/lib/css/react-big-calendar.css"
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer

const tempevents = [
  {
    title: "Google Interview",
    start: new Date(2022, 10, 13, 13),
    end: new Date(2022, 10, 13, 14)
  },
  {
    title: "Google Interview 2",
    start: new Date(2022, 10, 13, 16),
    end: new Date(2022, 10, 13, 17)
  },
  {
    title: "Google Interview 3",
    start: new Date(2022, 10, 13, 9),
    end: new Date(2022, 10, 13, 10)
  },
  {
    title: "Google Interview 4",
    start: new Date(2022, 10, 13, 0),
    end: new Date(2022, 10, 13, 2)
  },
]

export default function CalendarPage() {
  const navigate = useNavigate()
  const [events, setEvents] = React.useState(tempevents)

  const handleBack = () => {
    navigate("/dashboard");
  };

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
          height: 50,
        }}
      ></Box>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{height: 500, margin: "50px"}}
      ></Calendar>
    </div>
  )
}