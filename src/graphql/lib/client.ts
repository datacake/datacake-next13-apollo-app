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
import customApolloLink from 'src/graphql/lib/link';

const { getClient } = registerApolloClient(
  () => new NextSSRApolloClient({
    connectToDevTools: true,
    cache: new NextSSRInMemoryCache(),
    link: customApolloLink,
  }),
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TQuery = DocumentNode | TypedDocumentNode<any, OperationVariables>;

export const ssrQuery = ({ query }: { query: TQuery }) => getClient().query({ query });

export default getClient;
