const { User, Group, Ticket } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    groups: async () => {
      return Group.find().populate("owner").populate("tickets");
    },

    group: async (parent, { _id }) => {
      return Group.findOne({ _id });
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);

      return { user };
    },

    addGroup: async (parent, args) => {
      const group = await Group.create({
        groupName: args.groupName,
        owner: "639a7ace08ad3d425249c443",
      });
      console.log(group);

      return { group };
    },

    addTicket: async (parent, args) => {
      const ticket = await Ticket.create({
        ticketTitle: args.ticketTitle,
        ticketBody: args.ticketBody,
        createdBy: args.createdBy,
        urgencyLevel: args.urgencyLevel,
        dueBy: args.dueBy,
        status: args.status,
      });

      await Group.findByIdAndUpdate(
        { _id: "639a949c8549a946d1d2e094" },
        { $push: { tickets: ticket._id } }
      );
      console.log(ticket);

      return { ticket };
    },
  },
};

module.exports = resolvers;
