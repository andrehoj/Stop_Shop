import React from "react";
import { useState } from "react";
import { ADVANCED_SORT, SORT_PRODUCTS } from "../../utils/actions";
import { useStoreContext } from "../../utils/globalstate";
const options = [
  "any",
  "men's clothing",
  "jewelery",
  "electronics",
  "women's clothing",
];

export default function SortProducts() {
  const [state, dispatch] = useStoreContext();

  const [category, setCategory] = useState("any");

  function handleChange({ target }) {
    setCat(target);
    handleQuery(target);
  }

  function setCat({ textContent }) {
    setCategory(textContent.toLowerCase());
  }

  function advanceSort({ target }) {
    dispatch({
      type: ADVANCED_SORT,
      cart: { ...state },
      advancedSort: target.value,
    });
  }

  function handleQuery({ textContent }) {
    dispatch({
      type: SORT_PRODUCTS,
      cart: { ...state },
      sortByCategory: textContent.toLowerCase(),
    });
  }

  return (
    <form className="">
      <div className="flex flex-col items-center">
        <div className="flex gap-10 text-sm tracking-wider">
          <label htmlFor="underline_select" className="sr-only">
            Sort By
          </label>
          <select
            onChange={advanceSort}
            id="underline_select"
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            <option value="default">Newest</option>
            <option value="lowToHigh">Sort by price: low to high</option>
            <option value="highToLow">Sort by price: high to low</option>
            <option value="rating">Sort by rating</option>
          </select>
          {options.map((option, i) => {
            return (
              <span
                key={i}
                onClick={handleChange}
                className={`${
                  option === category && "text-main_teal"
                } hover:cursor-pointer`}
              >
                {option.toUpperCase()}
              </span>
            );
          })}
        </div>
      </div>
    </form>
  );
}
