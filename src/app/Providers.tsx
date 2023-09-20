'use client';

import createApolloClient from '@/graphql/lib/clientProvider';
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ApolloLink,
  ApolloProvider,
  HttpLink,
} from '@apollo/client';

const client = createApolloClient();

const Providers = ({ children }: React.PropsWithChildren) => (
  <ApolloProvider client={ client }>
    {children}
  </ApolloProvider>

);

export default Providers;
