import { gql } from '@apollo/client';

export const GET_FIRST = gql`
  query FirstPokemon {
    pokemon(name: "フシギダネ") {
      number
      name
      classification
      types
      image
    }
  }
`;
