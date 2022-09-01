import {
  Typography,
  Grid,
  Toolbar,
  Paper,
  Box,
  Button,
  ListItemText,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import React from "react";

const Header = ({ count, onRSVP }) => {
  return (
    <div className="body">
      <Grid container>
        <Grid item xs={12}>
          <Paper elevation={3}>
            <img
              src="./wine.jpg"
              alt="header-picture"
              style={{ maxHeight: "250px", width: "100%" }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={2} color="default">
            <Grid container spacing={2}>
              <Grid item xs={7}>
                <Toolbar>
                  <EventIcon color="action" fontSize="large" />
                  <Typography variant="h6" color="error">
                    SATURDAY, SEPTEMBER 24th
                  </Typography>
                </Toolbar>
              </Grid>
              <Grid item xs={3} padding={0}>
                <Box display="inline-block">
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginRight: "20px" }}
                    onClick={() => onRSVP(true)}
                  >
                    I'll Be there!!!
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => onRSVP(false)}
                  >
                    Count me out
                  </Button>
                </Box>
              </Grid>
              <Grid
                item
                xs={2}
                padding={0}
                justifyContent="center"
                paddingRight={0}
              >
                <ListItemText primary={count} secondary="Going" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
