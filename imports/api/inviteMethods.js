import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { InviteCollection } from "./invites";

Meteor.methods({
  "invite.updateByNumber"(phone, status, type) {
    check(phone, String);
    check(status, Boolean);
    check(type, String);
    InviteCollection.update(
      { phone: phone },
      {
        $set: { status: status, type: type },
      }
    );
  },
});
