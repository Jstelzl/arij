import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const JOIN_GROUP = gql`
mutation($groupId: ID!){
  joinGroup(groupId: $groupId) {
    _id
  }
}`

export const ADD_TICKET = gql`
mutation($ticketTitle: String!, $ticketBody: String!, $urgencyLevel: String!, $dueBy: String!, $status: String!, $groupId: ID!){
  addTicket(ticketTitle: $ticketTitle, ticketBody: $ticketBody, urgencyLevel: $urgencyLevel, dueBy: $dueBy, status: $status, groupId: $groupId) {
    _id
  }
}`