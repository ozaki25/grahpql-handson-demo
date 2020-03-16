import { gql } from '@apollo/client';

export const GET_ALL_POKEMON = gql`
  query FirstPokemon {
    pokemons(first: 151) {
      number
      name
      image
    }
  }
`;
