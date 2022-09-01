import { List, ListItem, Paper, Typography } from "@mui/material";
import React from "react";

const AttendList = ({ userList }) => {
  return (
    <Paper elevation={5} sx={{ p: "20px" }}>
      <Typography variant="h6">Attending</Typography>
      <List>
        {userList
          .filter((user) => user.status)
          .map((user) => (
            <ListItem key={user._id}>{user.name}</ListItem>
          ))}
      </List>
    </Paper>
  );
};

export default AttendList;
