import { Input, List, ListItem, Paper, Typography } from "@mui/material";
import { CommentsCollection } from "../api/Comments";
import React from "react";
import { useTracker } from "meteor/react-meteor-data";

const AttendList = ({ userList }) => {
  const comments = useTracker(() => CommentsCollection.find({}).fetch());
  const addComment = (msg) => {
    console.log(msg);
    CommentsCollection.insert({
      name: "Sam",
      message: msg,
      createAt: new Date(),
    });
  };
  return (
    <>
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
      <Paper elevation={5} sx={{ p: "20px", marginTop: "10px" }}>
        <Typography variant="h6">Comments</Typography>
        <List>
          {comments.map((c) => (
            <ListItem key={c._id}>
              {c.name} - {c.message}
            </ListItem>
          ))}
        </List>
        <Input
          placeholder="New Comment"
          onKeyUp={(event) => {
            if (event.key === "Enter") addComment(event.target.value);
          }}
        />
      </Paper>
    </>
  );
};

export default AttendList;
