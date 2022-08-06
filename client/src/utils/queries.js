import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query Keyboard {
    Keyboard {
      name
      coverImage
      images
      description
      brand
      review
      price
      wireless
      inStock
    }
  }
`;