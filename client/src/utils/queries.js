import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query {
    me {
      tickets {
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
      tickets {
        ticketTitle
        ticketBody
        status
        urgencyLevel
        dueBy
      }
    }
  }
`;
