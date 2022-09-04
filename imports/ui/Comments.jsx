import {
  Paper,
  Typography,
  List,
  Divider,
  Box,
  ListItem,
  ListItemText,
  Input,
} from "@mui/material";
import { CommentsCollection } from "../api/Comments";
import React, { useState } from "react";
import { useTracker } from "meteor/react-meteor-data";

const Comments = ({ attendee }) => {
  const [comment, setComment] = useState("");
  const comments = useTracker(() => CommentsCollection.find({}).fetch());
  const addComment = (msg) => {
    console.log(attendee);
    CommentsCollection.insert({
      name: attendee ?? "unknown",
      message: msg,
      createAt: new Date(),
    });
  };
  return (
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
          if (event.key === "Enter") {
            addComment(event.target.value);
            event.target.value = "";
          }
        }}
      />
    </Paper>
  );
};

export default Comments;
