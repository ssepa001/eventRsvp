import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { InviteCollection } from "./invites";

Meteor.methods({
  "invite.updateByNumber"(phone, status) {
    check(phone, String);
    check(status, Boolean);

    InviteCollection.update(
      { phone: phone },
      {
        $set: { status: status },
      }
    );
  },
});
