import React from "react";
import {
  UPDATE_CART_QUANTITY,
  REMOVE_ITEM_FROM_CART,
} from "../../utils/actions";
import { useStoreContext } from "../../utils/globalstate";
export default function CartItem({ item }) {
  const [, dispatch] = useStoreContext();

  function handleChange({ target }) {
    if (parseInt(target.value) <= 0) {
      dispatch({
        type: REMOVE_ITEM_FROM_CART,
        _id: item._id,
      });
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: target.value,
      });
    }
  }

  function handleRemove() {
    dispatch({
      type: REMOVE_ITEM_FROM_CART,
      _id: item._id,
    });
  }

  return (
    <div className="flex flex-wrap mt-3 pb-3 border-b">
      <div className="">
        <img
          src={`${item.image}`}
          alt="product cover"
          className="min-h-20 w-36"
        />
      </div>
      <div className="flex-col space-y-2">
        <h4 className="text-xl">{item.name}</h4>
        <p>${item.price}</p>

        <div className="">
          <input
            defaultValue={item.purchaseQuantity}
            className="w-20 inline border border-primary_black-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="number"
            onChange={handleChange}
          />
          <p
            className="inline  text-danger ml-2  border-l border-light_black pl-1 hover:cursor-pointer hover:underline"
            onClick={handleRemove}
          >
            Delete
          </p>
        </div>
      </div>
    </div>
  );
}
