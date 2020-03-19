import { gql } from '@apollo/client';

export const GET_ALL_POKEMON = gql`
  query Pokemons {
    pokemons(first: 151) {
      id
      name
      image
    }
  }
`;

export const GET_POKEMON_BY_ID = gql`
  query Pokemon($id: String!) {
    pokemon(id: $id) {
      id
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
        id
        name
      }
      image
    }
  }
`;
