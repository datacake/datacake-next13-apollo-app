'use client';

import customApolloLink from '@/graphql/lib/link';
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';

// Without SSR
// function makeClient() {
//   return new ApolloClient({
//     ssrMode: typeof window === 'undefined', // This condition will enable SSR only on the server
//     link: customApolloLink,
//     cache: new InMemoryCache(),
//   });
// }
// const client = makeClient();

// With SSR
function makeClient() {
  return new NextSSRApolloClient({
    connectToDevTools: true,
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
          new SSRMultipartLink({
            stripDefer: true,
          }),
          customApolloLink,
        ])
        : customApolloLink,
  });
}

const Providers = ({ children }: React.PropsWithChildren) => (
  <ApolloNextAppProvider makeClient={ makeClient }>
    {children}
  </ApolloNextAppProvider>
);

// Without SSR
// function Providers({ children }: React.PropsWithChildren) {
//   return (
//     <ApolloProvider client={client}>
//       {children}
//     </ApolloProvider>
//   );
// }

export default Providers;
