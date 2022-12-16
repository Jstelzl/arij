const { User, Group, Ticket } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    groups: async () => {
      return Group.find().populate("owner").populate("tickets").populate("members");
    },

    group: async (parent, { _id }) => {
      return Group.findOne({ _id });
    },
    ticket: async(parent, {_id}) => {
      return Ticket.findOne({ _id })
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);

      return { user };
    },

    joinGroup: async(parent, args) => {
      const user = await User.findOneAndUpdate(
        { _id: "change to context"},
        { $addToSet: {groups: args.groupId}}
      )

      await Group.findOneAndUpdate(
        {_id: args.groupId},
        { $addToSet: {members: "change to context"}}
      )

      return { user }
    },

    addGroup: async (parent, args) => {
      const group = await Group.create({
        groupName: args.groupName,
        owner: "6398bfe5131e45352c419be3",
        members: "6398bfe5131e45352c419be3"
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
        { _id: "639b9646ee70435d00c1709f" },
        { $push: { tickets: ticket._id } }
      );
      console.log(ticket);

      return { ticket };
    },

    editTicket: async (parent, args) => {
      const updateTicket = await Ticket.findOneAndUpdate(
        { _id: args.ticketId },
        {status: args.status},
        {new: true}
      )
      console.log(updateTicket)
      return updateTicket
    }
  },
};

module.exports = resolvers;
