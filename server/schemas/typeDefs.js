const { gql } = require("apollo-server-express");

const typeDefs = gql`
<<<<<<< HEAD
  type User {
=======
type User {
    _id: ID
>>>>>>> 13e1281dddb05e42d7fe1179a29b2c2e5e938676
    username: String
    password: String
  }

  type Query {
    users: [User]
  }
  type Mutation {
    addUser(username: String!, password: String!): User
  }
`;
module.exports = typeDefs;
