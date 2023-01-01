import { useReducer } from "react";
import {
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_ITEM_FROM_CART,
  SORT_PRODUCTS,
  ADVANCED_SORT,
  SET_SHOWCART_FALSE,
} from "../utils/actions";

//custom reducer function
//state the previous state we ...spread and action has the type key and cart key
export function reducer(state, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.cart],
        showCart: true,
      };

    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity;
          }
          return product;
        }),
      };

    case REMOVE_ITEM_FROM_CART:
      let newState = state.cart.filter((product) => {
        return product._id !== action._id;
      });
      return {
        ...state,
        cart: newState,
      };

    case SORT_PRODUCTS:
      return {
        ...state,
        sortByCategory: action.sortByCategory,
      };
    case ADVANCED_SORT:
      return {
        ...state,
        advancedSort: action.advancedSort,
      };

    case SET_SHOWCART_FALSE:
      return {
        ...state,
        showCart: false,
      };

    default:
      return state;
  }
}

export function useProductReducer(initialState) {
  //use reducer is a react hook that takes in a function and and initialState
  //passing in the reducer and initial state to begin with
  return useReducer(reducer, initialState);
}
