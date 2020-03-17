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
      classification
      types
      height {
        minimum
        maximum
      }
      weight {
        minimum
        maximum
      }
      evolutions {
        number
        name
      }
      image
    }
  }
`;
