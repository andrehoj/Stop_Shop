import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query Keyboard {
    Keyboard {
      _id
      name
      coverImage
      price
      inStock
    }
  }
`;

export const GET_PRODUCT = gql`
  query Keyboard($_id: ID, $brand: String) {
    Keyboard(_id: $_id, brand: $brand) {
      _id
      name
      coverImage
      images
      price
      description
      brand
      review
      wireless
      inStock
    }
  }
`;
