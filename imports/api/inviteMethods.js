import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { InviteCollection } from "./invites";

Meteor.methods({
  "invite.updateByNumber"(phone, status) {
    check(phone, String);
    check(status, Boolean);

    // if (!this.userId) {
    //   throw new Meteor.Error("Not authorized.");
    // }

    // const invite = InviteCollection.findOne({ phone: phone });
    // console.log(invite);
    // if (!task) {
    //   throw new Meteor.Error("Access denied.");
    // }

    InviteCollection.update(
      { phone: phone },
      {
        $set: { status: status },
      }
    );
  },
});
