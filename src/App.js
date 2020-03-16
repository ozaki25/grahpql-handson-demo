import React from 'react';
import { ApolloProvider } from '@apollo/client';

import client from './graphql/client';
import PokemonList from './components/PokemonList';

function App() {
  return (
    <ApolloProvider client={client}>
      <PokemonList />
    </ApolloProvider>
  );
}

export default App;
