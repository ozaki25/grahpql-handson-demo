import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_FIRST } from '../graphql/query';

function PokemonContainer() {
  const { loading, error, data } = useQuery(GET_FIRST);
  console.log({ loading, error, data });
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return <Pokemon {...data.pokemon} />;
}

function Pokemon({ number, name, classification, types, image }) {
  return (
    <dl>
      <dt>No.</dt>
      <dd>{number}</dd>
      <dt>Name</dt>
      <dd>{name}</dd>
      <dt>Classification</dt>
      <dd>{classification}</dd>
      <dt>Types</dt>
      <dd>{types && types.map(type => type).join(', ')}</dd>
      <dt>Image</dt>
      <dd>
        <img src={image} alt={name} />
      </dd>
    </dl>
  );
}

export default PokemonContainer;
