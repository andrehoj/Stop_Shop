import React from "react";

export default function SortProducts() {
  return (
    <form className=" border-b border-main_teal" action="">
      <div className="flex justify-center space-x-20 mb-2">
        <select
          placeholder="Brand"
          id="underline_select"
          class="w-36 py-2.5 px-0 text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        >
          <option disabled selected>
            Brand
          </option>
          <option value="Logitech">Logitech</option>
          <option value="Keychron">Keychron</option>
        </select>
        <select
          placeholder="Brand"
          id="underline_select"
          class="w-36 py-2.5 px-0 text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        >
          <option disabled selected>
            Size
          </option>
          <option value="Logitech">100%</option>
          <option value="Keychron">75%</option>
          <option value="Keychron">50%</option>
        </select>
      </div>
    </form>
  );
}
