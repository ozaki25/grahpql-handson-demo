import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_POKEMON_BY_NUMBER } from '../graphql/query';
import { useParams } from 'react-router-dom';

function PokemonDetailContainer() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_POKEMON_BY_NUMBER, {
    variables: { number: id },
  });
  console.log({ loading, error, data });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return <PokemonDetail pokemon={data.pokemon} />;
}

function PokemonDetail({ pokemon }) {
  const { number, name, image } = pokemon;
  return (
    <>
      <p>
        No.{number} {name}
      </p>
      <img src={image} alt={name} height="150" />
    </>
  );
}

export default PokemonDetailContainer;
