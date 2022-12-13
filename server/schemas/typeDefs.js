const { gql } = require('apollo-server-express')

const typeDefs = gql`
type User {
    username: String
    password: String
}

type Query {
    users: [User]
}
type Mutation {
    addUser(username: String!, password: String!): User
}
`
module.exports = typeDefs;