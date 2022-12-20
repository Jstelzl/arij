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
    group(groupId: ID!): Group
    ticket(ticketId: ID!): Ticket
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, password: String!): Auth
    addGroup(groupName: String!): Group
    joinGroup(groupId: ID!): Group
    editTicket(ticketId: ID!, status: String!): Ticket
    addTicket(
      ticketTitle: String!
      ticketBody: String!
      createdBy: String
      urgencyLevel: String!
      dueBy: String!
      status: String!
      groupId: ID!
    ): Ticket
  }
`;

module.exports = typeDefs;
