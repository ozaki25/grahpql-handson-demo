import { gql } from '@apollo/client';

export const GET_ALL_POKEMON = gql`
  query Pokemons {
    pokemons(first: 151) {
      number
      name
      image
    }
  }
`;

export const GET_POKEMON_BY_NUMBER = gql`
  query Pokemon($number: String!) {
    pokemon(number: $number) {
      number
      name
      image
    }
  }
`;
