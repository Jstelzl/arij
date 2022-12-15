const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    password: String
    tickets: [Ticket]
    groups: [Group]
  }

  type Ticket {
    _id: ID
    ticketTitle: String
    ticketBody: String
    createdAt: String
    createdBy: String
    urgencyLevel: String
    dueBy: String
    status: String
  }

  type Group {
    _id: ID
    groupName: String
    owner: User
    createdAt: String
    members: [User]
    tickets: [Ticket]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    groups: [Group]
    user(username: String!): User
    group(_id: ID!): Group
  }

  type Mutation {
    login(username: String!, password: String!): User
    addUser(username: String!, password: String!): User
    addGroup(groupName: String!): Group
    joinGroup(_id: ID!, groupName: String!): Group
    addTicket(
      ticketTitle: String!
      ticketBody: String!
      createdBy: String!
      urgencyLevel: String!
      dueBy: String!
      status: String!
    ): Ticket
    editTicket(status: String!): Ticket
  }
`;

module.exports = typeDefs;
