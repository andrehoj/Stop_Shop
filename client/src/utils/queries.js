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
  query Product($advancedSort: String, $category: String, $_id: ID ) {
    Product(advancedSort: $advancedSort, category: $category, _id: $_id) {
      _id
      title
      image
      description
      category
      price
      rating {
        count
        rate
      }
    }
  }
`;
