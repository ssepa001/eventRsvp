import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Box,
  Collapse,
  Divider,
  Input,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import Comments from "./Comments";

const AttendList = ({ userList, attendee }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <Paper elevation={5} sx={{ p: "20px" }}>
        {/* <Typography variant="subtitle1" fontSize={20}>
      Attending
    </Typography>
    <Divider /> */}
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            position: "relative",
            overflow: "auto",
            maxHeight: 350,
          }}
        >
          <ListItemButton onClick={handleClick}>
            <ListItemText>
              <Typography variant="subtitle1" fontSize={20}>
                Attending
              </Typography>
              <Divider />
            </ListItemText>

            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {userList
                .filter((user) => user.status)
                .sort((a, b) => {
                  return a.type > b.type ? 1 : -1;
                })
                .map((user) => (
                  <ListItem key={user._id}>
                    <Typography variant="body2" fontSize={14}>
                      {user.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      fontSize={12}
                      fontWeight={200}
                    >
                      {` -[${user.type}]`}
                    </Typography>
                  </ListItem>
                ))}
            </List>
          </Collapse>
        </List>
      </Paper>
      <Comments attendee={attendee} />
    </>
  );
};

export default AttendList;
