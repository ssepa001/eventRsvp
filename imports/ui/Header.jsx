import {
  Typography,
  Grid,
  Toolbar,
  Paper,
  Box,
  Button,
  ListItemText,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import React, { useState } from "react";
import { Girl } from "@mui/icons-material";

const Header = ({ count, onRSVP }) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [type, setType] = useState("bothEvents");

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
            <Grid container>
              <Grid item xs={7}>
                <Toolbar>
                  <EventIcon color="action" fontSize="large" />
                  <Typography variant="h6" color="error">
                    SATURDAY, SEPTEMBER 23rd - 24th
                  </Typography>
                </Toolbar>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={0}
              justifyContent="right"
              alignContent={"right"}
            >
              <Grid
                item
                xs={5}
                justifyItems="right"
                justifyContent="right"
                paddingLeft={0}
              >
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  defaultValue="bothEvents"
                  onChange={(event) => {
                    setType(event.target.value);
                  }}
                  sx={{ marginRight: 0 }}
                >
                  <FormControlLabel
                    value="onlyGoKart"
                    control={
                      <Radio
                        sx={{
                          "& .MuiSvgIcon-root": {
                            fontSize: 18,
                          },
                        }}
                      />
                    }
                    label={
                      <Typography variant="subtitle2" color="textSecondary">
                        Only Go Kart
                      </Typography>
                    }
                    labelPlacement="bottom"
                  />
                  <FormControlLabel
                    value="onlyWinery"
                    control={
                      <Radio
                        sx={{
                          "& .MuiSvgIcon-root": {
                            fontSize: 18,
                          },
                        }}
                      />
                    }
                    label={
                      <Typography variant="subtitle2" color="textSecondary">
                        Only Winery
                      </Typography>
                    }
                    labelPlacement="bottom"
                  />
                  <FormControlLabel
                    value="bothEvents"
                    control={
                      <Radio
                        sx={{
                          "& .MuiSvgIcon-root": {
                            fontSize: 18,
                          },
                        }}
                      />
                    }
                    label={
                      <Typography variant="subtitle2" color="textSecondary">
                        In for Both
                      </Typography>
                    }
                    labelPlacement="bottom"
                  />
                </RadioGroup>
              </Grid>
              <Grid
                item
                xs={3}
                padding={0}
                justifyContent="right"
                alignContent={"right"}
              >
                <Box display="inline-block">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => onRSVP(true, type)}
                    size="small"
                    style={{ marginRight: "5px" }}
                  >
                    <Typography>I'm in</Typography>
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => onRSVP(false)}
                    size="small"
                  >
                    <Typography>I'm out</Typography>
                  </Button>
                </Box>
              </Grid>
              <Grid
                item
                xs={2}
                padding={0}
                justifyContent="right"
                paddingRight={0}
                alignContent="right"
                alignItems="right"
              >
                <Box alignContent="center" justifyContent="center">
                  <Typography textAlign="center">Going</Typography>
                  <Typography textAlign="center">{count}</Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
