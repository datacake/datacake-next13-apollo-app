import { ApolloLink, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/link-context';

// Define your GraphQL API URL
const uri = process.env.NEXT_PUBLIC_GRAPHQL_URI;

// Create an HTTP link for your API
const httpLink = new HttpLink({
  uri,
});

// Create an Apollo Link that adds headers
const authLink = setContext((_, { headers }) => {
  // Replace 'YOUR_AUTH_TOKEN' with your actual authorization token or logic
  const token = process.env.NEXT_PUBLIC_USER_TOKEN;

  return {
    headers: {
      ...headers,
      Authorization: token ? `Token ${token}` : '', // Add the authorization header
    },
  };
});

// Combine the HTTP and authentication links into a single link
const customApolloLink = ApolloLink.from([ authLink, httpLink ]);

export default customApolloLink;
