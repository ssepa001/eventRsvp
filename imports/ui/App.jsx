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

  const handleInput = (number) => setUserPhone(number);

  const handleRSVP = (status) => {
    Meteor.call("invite.updateByNumber", userPhone, status);
  };

  return (
    <CssBaseline>
      <div>
        <RegisterModal
          userList={invitations}
          handleInput={handleInput}
        />
        <Header
          count={invitations.filter((invite) => invite.status).length}
          onRSVP={handleRSVP}
        />
        <Details userList={invitations} />
      </div>
    </CssBaseline>
  );
};
