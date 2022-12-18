import React from "react";
import PageContainer from "./components/PageContainer";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: '/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    console.log(headers)
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
function App() {
    return (
        <ApolloProvider client={client}>
        <PageContainer />
        </ApolloProvider>
    )
}

export default App;
