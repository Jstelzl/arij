const { User, Group, Ticket } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    groups: async () => {
      return Group.find().populate("owner");
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
  },
};

module.exports = resolvers;
