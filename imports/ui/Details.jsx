import {
  Box,
  Button,
  Container,
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
import { Padding } from "@mui/icons-material";
import AttendList from "./AttendList";
const Details = ({ userList }) => {
  return (
    <Container style={{ marginTop: "40px" }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={8}>
          <Paper elevation={3} sx={{ p: "40px" }}>
            <Typography
              variant="h4"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Sam's 31st Birthday Bash
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <DriveEtaIcon />
                </ListItemIcon>
                <Typography variant="subtitle2">
                  Go Kart Racing At K1 (Carlsbad)
                </Typography>
                <Typography variant="caption" paddingLeft={1}>
                  Cost: $90
                </Typography>
                <Link
                  href="https://www.google.com/maps?q=k1+carlsbad&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjio4WS7PL5AhXzMjQIHbyQAB4Q_AUoAXoECAIQAw"
                  fontSize="x-small"
                >
                  Direction
                </Link>
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <WineBarIcon />
                </ListItemIcon>
                <Typography variant="subtitle2">
                  Temecula Wine Tasting Tour w/ party bus
                </Typography>
                <Typography variant="caption" paddingLeft={1}>
                  Cost: $90
                </Typography>
                <Link
                  href="https://www.google.com/maps?q=k1+carlsbad&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjio4WS7PL5AhXzMjQIHbyQAB4Q_AUoAXoECAIQAw"
                  fontSize="x-small"
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
              kart races of the year. Plan is to ba I would like to invite you
              all to join me in one of the hottest go kart races of the year.
              Plan is to ba I would like to invite you all to join me in one of
              the hottest go kart races of the year. Plan is to ba I would like
              to invite you all to join me in one of the hottest go kart races
              of the year. Plan is to ba I would like to invite you all to join
              me in one of the hottest go kart races of the year. Plan is to ba
              I would like to invite you all to join me in one of the hottest go
              kart races of the year. Plan is to ba I would like to invite you
              all to join me in one of the hottest go kart races of the year.
              Plan is to ba I would like to invite you all to join me in one of
              the hottest go kart races of the year. Plan is to ba I would like
              to invite you all to join me in one of the hottest go kart races
              of the year. Plan is to ba
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <AttendList userList={userList} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Details;
