import React from 'react';
import { ApolloProvider } from '@apollo/client';

import client from './graphql/client';
import Router from './routes/router';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
}

export default App;
