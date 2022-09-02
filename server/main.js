import { Meteor } from "meteor/meteor";
import { InviteCollection } from "../imports/api/invites";
import { CommentsCollection } from "../imports/api/Comments";
import "/imports/api/inviteMethods";

function insertLink({ name, phone }) {
  const cleanPhone = phone.replace(/\D/g, "");
  InviteCollection.insert({
    name,
    phone: cleanPhone,
    status: null,
    createdAt: new Date(),
  });
}

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  InviteCollection._dropCollection();
  if (InviteCollection.find().count() === 0) {
    insertLink({
      name: "Sam S",
      phone: "2092445734",
    });
    insertLink({
      name: "Brooke H",
      phone: "(530) 913-1704",
    });
    insertLink({
      name: "Colleen C",
      phone: "(818) 668-4442",
    });
    insertLink({
      name: "Brett N",
      phone: "(818) 532-8593",
    });
    insertLink({
      name: "Jess P",
      phone: "(619) 317-5781",
    });
    insertLink({
      name: "Anthony Inc",
      phone: "(941) 773-1157",
    });
    insertLink({
      name: "Matt Howarth",
      phone: "(941) 773-1157",
    });
    insertLink({
      name: "Anthony Inc",
      phone: "(941) 773-1157",
    });
    insertLink({
      name: "Matt Small",
      phone: "(941) 773-1157",
    });
    insertLink({
      name: "Bryan M",
      phone: "(818) 726-8976",
    });
    insertLink({
      name: "Alex Barker",
      phone: "(650) 776-6438",
    });
    insertLink({
      name: "Bethany S",
      phone: "(352) 263-9953)",
    });
    insertLink({
      name: "Miranda M",
      phone: "(559) 940-1187",
    });
    insertLink({
      name: "Vito T",
      phone: "(916) 705-2650",
    });
    insertLink({
      name: "Michael M",
      phone: "(832) 563-8850",
    });
    insertLink({
      name: "Emily W",
      phone: "(760) 703-5153",
    });
    insertLink({
      name: "Cade C",
      phone: "(970) 234-9108",
    });
    insertLink({
      name: "David H",
      phone: "(858) 248-3101",
    });
    insertLink({
      name: "Shahin S",
      phone: "2092445734",
    });
    insertLink({
      name: "Ramtin S",
      phone: "(818) 804-9302",
    });
    insertLink({
      name: "Arash S",
      phone: "(818) 804-9344",
    });
    insertLink({
      name: "Shahin S",
      phone: "(818) 804-9379",
    });
  }
});
