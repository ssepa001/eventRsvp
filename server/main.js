import { Meteor } from "meteor/meteor";
import { InviteCollection } from "../imports/api/invites";
import { CommentsCollection } from "../imports/api/Comments";
import "/imports/api/inviteMethods";

function insertLink({ name, phone }) {
  const cleanPhone = phone.replace(/\D/g, "");
  const match = InviteCollection.find({ phone: cleanPhone }).count();
  if (match) return;
  InviteCollection.insert({
    name,
    phone: cleanPhone,
    status: null,
    createdAt: new Date(),
  });
}

const contactList = [
  {
    name: "Miranda M",
    phone: "(559) 940-1187",
  },
  {
    name: "Sam S",
    phone: "2092445734",
  },
  {
    name: "Brooke H",
    phone: "(530) 913-1704",
  },
  {
    name: "Colleen C",
    phone: "(818) 668-4442",
  },
  {
    name: "Brett N",
    phone: "(818) 532-8593",
  },
  {
    name: "Jess P",
    phone: "(619) 317-5781",
  },
  {
    name: "Matt Howarth",
    phone: "(978) 884-7161",
  },
  {
    name: "Anthony Inc",
    phone: "(941) 773-1157",
  },
  {
    name: "Matt Small",
    phone: "(315) 657-1838",
  },
  {
    name: "Bryan M",
    phone: "(818) 726-8976",
  },
  {
    name: "Alex Barker",
    phone: "(650) 776-6438",
  },
  {
    name: "Bethany S",
    phone: "(352) 263-9953)",
  },
  {
    name: "Vito T",
    phone: "(916) 705-2650",
  },
  {
    name: "Michael M",
    phone: "(832) 563-8850",
  },
  {
    name: "Emily W",
    phone: "(760) 703-5153",
  },
  {
    name: "Cade C",
    phone: "(970) 234-9108",
  },
  {
    name: "David H",
    phone: "(858) 248-3101",
  },
  {
    name: "Shahin S",
    phone: "(818) 804-9379",
  },
  {
    name: "Ramtin S",
    phone: "(818) 804-9302",
  },
  {
    name: "Arash S",
    phone: "(818) 804-9344",
  },
  {
    name: "Shawn R",
    phone: "(909) 618-7063",
  },
  {
    name: "Logan M",
    phone: "(508) 887-2696",
  },
  {
    name: "Zach W",
    phone: "(941) 773-4974",
  },
];

Meteor.startup(() => {
  console.log(`Total number of invitees ${contactList.length}`);
  console.log(InviteCollection.find().count());
  if (InviteCollection.find().count() < contactList.length) {
    contactList.map((contact) => {
      insertLink(contact);
    });
  }
});
