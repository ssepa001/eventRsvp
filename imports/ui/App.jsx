import { Container, CssBaseline, Grid } from "@mui/material";
import React, { useState } from "react";
import Details from "./Details";
import Header from "./Header";
import { useTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import { InviteCollection } from "../api/invites";
import RegisterModal from "./RegisterModal";

const numGoing = 12;

export const App = () => {
  const invitations = useTracker(() => InviteCollection.find({}).fetch());
  const [userPhone, setUserPhone] = useState("");
  const [invitee, setInvitee] = useState("");
  const handleAttendee = (name) => {
    setInvitee(name);
  };
  const handleInput = (number) => setUserPhone(number);

  const handleRSVP = (status, type) => {
    Meteor.call("invite.updateByNumber", userPhone, status, type ?? "NA");
  };

  return (
    <CssBaseline>
      <div className="main">
        <RegisterModal
          userList={invitations}
          handleInput={handleInput}
          handleAttendee={handleAttendee}
          invitee={invitee}
        />
        <Header
          count={invitations.filter((invite) => invite.status).length}
          onRSVP={handleRSVP}
          invitee={invitee}
        />
        <Details userList={invitations} attendee={invitee} />
      </div>
    </CssBaseline>
  );
};
