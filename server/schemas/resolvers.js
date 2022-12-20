const { AuthenticationError } = require("apollo-server-express");
const { User, Group, Ticket } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("groups")
          .populate("tickets");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },

    users: async () => {
      return User.find();
    },

    groups: async () => {
      return Group.find()
        .populate("owner")
        .populate("tickets")
        .populate("members");
    },

    group: async (parent, args) => {
      console.log(args)
      return Group.findOne( {_id: args.groupId} )
        .populate("owner")
        .populate("tickets")
        .populate("members");
    },

    ticket: async (parent, { groupId }) => {
      return Ticket.findOne({ groupId });
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { user, token };
    },

    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },

    joinGroup: async (parent, args, context) => {
      const user = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { groups: args.groupId } }
      );

      await Group.findOneAndUpdate(
        { _id: args.groupId },
        { $addToSet: { members: context.user._id } }
      );

      return { user };
    },

    addGroup: async (parent, args, context) => {
      const group = await Group.create({
        groupName: args.groupName,
        owner: context.user._id,
        members: context.user._id,
      });
      console.log(group);

      return { group };
    },

    addTicket: async (parent, args, context) => {
      const ticket = await Ticket.create({
        ticketTitle: args.ticketTitle,
        ticketBody: args.ticketBody,
        createdBy: context.user.username,
        urgencyLevel: args.urgencyLevel,
        dueBy: args.dueBy,
        status: args.status,
      });

      await Group.findByIdAndUpdate(
        { _id: args.groupId },
        { $push: { tickets: ticket._id } }
      );

      await User.findByIdAndUpdate(
        { _id: context.user._id },
        { $push: { tickets: ticket._id } }
      )
      console.log(ticket);

      return { ticket };
    },

    editTicket: async (parent, args) => {
      const updateTicket = await Ticket.findOneAndUpdate(
        { _id: args.ticketId },
        { status: args.status },
        { new: true }
      );
      console.log(updateTicket);
      return updateTicket;
    },
  },
};

module.exports = resolvers;
