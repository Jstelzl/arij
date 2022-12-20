import { gql } from '@apollo/client'

export const QUERY_ME = gql`
query{
    me {
      tickets {
        ticketTitle
        ticketBody
        status
        urgencyLevel
        dueBy
      }
    }
  }
`