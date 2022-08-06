import { useReducer } from "react";
import { TOGGLE_CART } from "../utils/actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        showCart: !state.showCart,
      };
    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
