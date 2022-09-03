import {
  Box,
  Divider,
  Input,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { CommentsCollection } from "../api/Comments";
import React from "react";
import { useTracker } from "meteor/react-meteor-data";

const AttendList = ({ userList }) => {
  const comments = useTracker(() => CommentsCollection.find({}).fetch());
  const addComment = (msg) => {
    CommentsCollection.insert({
      name: "Sam",
      message: msg,
      createAt: new Date(),
    });
  };
  return (
    <>
      <Paper elevation={5} sx={{ p: "20px" }}>
        <Typography variant="subtitle1" fontSize={20}>
          Attending
        </Typography>
        <Divider />
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            position: "relative",
            overflow: "auto",
            maxHeight: 350,
            "& ul": { padding: 0 },
          }}
        >
          {userList
            .filter((user) => user.status)
            .map((user) => (
              <ListItem key={user._id}>
                <Typography variant="body2" fontSize={14}>
                  {user.name}
                </Typography>
                <Typography variant="caption" fontSize={12} fontWeight={200}>
                  {` -[${user.type}]`}
                </Typography>
              </ListItem>
            ))}
        </List>
      </Paper>
      <Paper elevation={5} sx={{ p: "20px", marginTop: "10px" }}>
        <Typography variant="h6">Comments</Typography>
        <List>
          <Divider />
          {comments.map((c) => {
            return (
              <Box key={c._id}>
                <Paper
                  elevation={4}
                  square
                  sx={{ mt: "5px", backgroundColor: "#EEEEEE" }}
                >
                  <ListItem>
                    <ListItemText primary={c.message} secondary={`${c.name}`} />
                  </ListItem>
                </Paper>
              </Box>
            );
          })}
        </List>
        <Input
          placeholder="New Comment.."
          onKeyUp={(event) => {
            if (event.key === "Enter") addComment(event.target.value);
          }}
        />
      </Paper>
    </>
  );
};

export default AttendList;
