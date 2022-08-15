import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query Product {
    Product {
      _id
      title
      image
      description
      category
      price
    }
  }
`;

export const GET_PRODUCT = gql`
  query Product($_id: ID, $category: String) {
    Product(_id: $_id, category: $category) {
      _id
      title
      image
      description
      category
      price
      rating{
        count 
        rate
      }
    }
  }
`;
