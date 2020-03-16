import React from 'react';
import { ApolloProvider } from '@apollo/client';

import client from './graphql/client';
import Pokemon from './components/Pokemon';

function App() {
  return (
    <ApolloProvider client={client}>
      <Pokemon />
    </ApolloProvider>
  );
}

export default App;
