'use client';

import createApolloClient from '@/graphql/lib/clientProvider';
import {
  ApolloProvider,
} from '@apollo/client';
import ThemeProvider from './providers/ThemeProvider';

const client = createApolloClient();

const Providers = ({ children }: React.PropsWithChildren) => (
  <ApolloProvider client={ client }>
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      {children}
    </ThemeProvider>
  </ApolloProvider>

);

export default Providers;
