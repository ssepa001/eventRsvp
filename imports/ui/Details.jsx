import {
  Container,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import WineBarIcon from "@mui/icons-material/WineBar";
import AttendList from "./AttendList";
const Details = ({ userList, attendee }) => {
  return (
    <Container style={{ marginTop: "40px" }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} lg={8} justifyContent="center" alignItems="center">
          <Paper elevation={3} sx={{ p: "10px" }}>
            <Typography
              variant="h5"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              <b>Sam's 31st Birthday Bash</b>
            </Typography>
            <Divider />
            <List>
              <ListItem>
                <ListItemIcon>
                  <DriveEtaIcon />
                </ListItemIcon>
                <Typography variant="subtitle2" align="center" gutterBottom>
                  Go Kart Racing At K1 in Carlsbad <b>Friday 23rd @6:30pm</b>
                </Typography>
                <Typography variant="caption" paddingLeft={1} gutterBottom>
                  Cost: $100pp
                </Typography>
                <Link
                  href="https://www.google.com/maps?q=k1+carlsbad&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjio4WS7PL5AhXzMjQIHbyQAB4Q_AUoAXoECAIQAw"
                  target="_blank"
                  fontSize="x-small"
                  sx={{ marginLeft: "6px" }}
                >
                  Direction
                </Link>
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <WineBarIcon />
                </ListItemIcon>
                <Typography variant="subtitle2" align="center" gutterBottom>
                  After party at my house for drinks / games
                </Typography>
                <Link
                  href="https://www.google.com/maps/place/3319+Ticonderoga+St,+San+Diego,+CA+92117/@32.8017877,-117.2130957,17z/data=!3m1!4b1!4m5!3m4!1s0x80dc0030cfbceef1:0x2b7491cb637b1da8!8m2!3d32.8023269!4d-117.2108875"
                  target="_blank"
                  fontSize="x-small"
                  sx={{ marginLeft: "6px" }}
                >
                  Direction
                </Link>
              </ListItem>
            </List>
            <Typography
              variant="body1"
              align="center"
              color="textSecondary"
              paragraph
            >
              I would like to invite you all to join me in one of the hottest go
              kart races of the year on Friday evening of September 23rd.
              <br />
              <b>GRAND PRIX - $100 per person 3 races:</b>
              <li>12 Lap Practice Race</li>
              <li>12 Lap Qualifying Race</li>
              <li>14 Lap Final Race</li>
              Trophies for the Top 3 Races
              <br />
              <br />
              After the race is over we can all head over to my place in Bay
              Park for drinks and games.
              <br />
              <br />I would love to see everyone there but understand it's a
              busy weekend. Either way,&nbsp;
              <b>
                please RSVP or decline by <u>September 18th</u> as I need the
                head count ASAP.
              </b>
              <br />
              &nbsp;I can't wait to celebrate with you all! &#127870;
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
          <AttendList userList={userList} attendee={attendee} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Details;
