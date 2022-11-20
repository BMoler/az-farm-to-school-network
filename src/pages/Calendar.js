import { Container, Stack, Card, Typography } from "@mui/material";
import "./Calendar.css";

function Calendar() {
  return (
    <>
      <div id="hero-img">
          <h1>Calendar</h1>
      </div>
      
      <Container>
        <h2>Upcoming Events</h2>
        
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
          <Card sx={{ minWidth: 275 }}>
            <div style={{padding:"10px"}}>
              <h3>Event name</h3>
              <Typography>Date/Time/Location</Typography>
              <Typography>Description</Typography>
            </div>
          </Card>
          <Card sx={{ minWidth: 275 }}>
            <div style={{padding:"10px"}}>
              <h3>Event name</h3>
              <Typography>Date/Time/Location</Typography>
              <Typography>Description</Typography>
            </div>
          </Card>
          <Card sx={{ minWidth: 275 }}>
            <div style={{padding:"10px"}}>
              <h3>Event name</h3>
              <Typography>Date/Time/Location</Typography>
              <Typography>Description</Typography>
            </div>
          </Card>
          <Card sx={{ minWidth: 275 }}>
            <div style={{padding:"10px"}}>
              <h3>Event name</h3>
              <Typography>Date/Time/Location</Typography>
              <Typography>Description</Typography>
            </div>
          </Card>
        </Stack>

        <div className="flex justify-center" style={{paddingTop:"50px"}}>
          <iframe src="https://calendar.google.com/calendar/embed?src=ds5004n7ab6jhh1il70mljalek%40group.calendar.google.com&ctz=America%2FPhoenix" title="calendar" width="800" height="600" frameborder="0" scrolling="no"></iframe>    
        </div>      
      </Container>
    </>
  );
}

export default Calendar;
