import { Meteor } from "meteor/meteor";
import { InviteCollection } from "/imports/api/invites";
import '/imports/api/inviteMethods';

function insertLink({ name, phone }) {
  InviteCollection.insert({ name, phone, status: null, createdAt: new Date() });
}

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (InviteCollection.find().count() === 0) {
    insertLink({
      name: "Sam Sepasi",
      phone: "2092445734",
    });
    insertLink({
      name: "Sam Sepasi",
      phone: "2092445735",
    });
    insertLink({
      name: "Sam Sepasi",
      phone: "2092445736",
    });
    insertLink({
      name: "Sam Sepasi",
      phone: "2092445737",
    });
    insertLink({
      name: "Sam Sepasi",
      phone: "2092445738",
    });
    insertLink({
      name: "Sam Sepasi",
      phone: "2092445739",
    });
  }
});
