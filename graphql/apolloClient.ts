import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: 'https://api-eu-central-1.hygraph.com/v2/cl5qjgasv04ka01tc7suj20gr/master',
  cache: new InMemoryCache(),
});
