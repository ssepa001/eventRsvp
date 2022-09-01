import { Meteor } from "meteor/meteor";
import { InviteCollection } from "../imports/api/invites";
import { CommentsCollection } from "../imports/api/Comments";
import "/imports/api/inviteMethods";

function insertLink({ name, phone }) {
  InviteCollection.insert({ name, phone, status: null, createdAt: new Date() });
}

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (InviteCollection.find().count() === 0) {
    insertLink({
      name: "Sam S",
      phone: "2092445734",
    });
    insertLink({
      name: "Brooke H",
      phone: "2092445735",
    });
    insertLink({
      name: "Colleen C",
      phone: "2092445736",
    });
    insertLink({
      name: "Brett N",
      phone: "2092445737",
    });
    insertLink({
      name: "Jess P",
      phone: "2092445738",
    });
    insertLink({
      name: "Anthony Inc",
      phone: "2092445739",
    });
  }
});
