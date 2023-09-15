/* eslint-disable import/no-unresolved */
import {
  DocumentNode,
  HttpLink,
  OperationVariables,
  TypedDocumentNode,
} from '@apollo/client';
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

const { getClient } = registerApolloClient(
  () => new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_URI,
    }),
  }),
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TQuery = DocumentNode | TypedDocumentNode<any, OperationVariables>;

export const ssrQuery = ({ query }: { query: TQuery }) => getClient().query({ query });

export default getClient;
