import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query {
    me {
      tickets {
        _id
        ticketTitle
        ticketBody
        status
        urgencyLevel
        dueBy
      }
      groups {
        _id
        groupName
      }
    }
  }
`;

export const QUERY_GROUP = gql`
  query ($groupId: ID!) {
    group(groupId: $groupId) {
      groupName
      tickets {
        _id
        ticketTitle
        ticketBody
        status
        urgencyLevel
        dueBy
      }
    }
  }
`;
