import React from "react";
import { SORT_PRODUCTS } from "../../utils/actions";
import { useStoreContext } from "../../utils/globalstate";
const options = ["Any", "Logitech", "Keychron", "Corsair"];

export default function SortProducts() {
  const [state, dispatch] = useStoreContext();

  const handleChange = (event) => {
    dispatch({
      type: SORT_PRODUCTS,
      cart: { ...state },
      sortByBrand: event.target.value,
    });
  };

  return (
    <form className=" border-b border-main_teal">
      <div className="flex flex-col items-center mb-2">
        <label htmlFor="Brand text-left" className="">
          Brand
        </label>
        <select
          onChange={handleChange}
          value={state.sortByBrand}
          id="underline_select"
          className="w-36 text-center py-2.5 px-0 text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        >
          {options.map((option, i) => (
            <option value={option} defaultValue={option} key={i}>
              {option}
            </option>
          ))}
        </select>
        {/* <select
          placeholder="Brand"
          id="underline_select"
          className="w-36 py-2.5 px-0 text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        >
          <option disabled value={"Size"} defaultValue={"Size"}>
            Size
          </option>
          <option value="Logitech">100%</option>
          <option value="Keychron">75%</option>
          <option value="Keychron">50%</option>
        </select> */}
      </div>
    </form>
  );
}
