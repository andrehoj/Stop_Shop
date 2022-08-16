import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "../../utils/queries";
import ProductItem from "./ProductItem";
import SortProducts from "./SortProducts";
import { BarLoader } from "react-spinners";
import { useStoreContext } from "../../utils/globalstate";

export default function ProductContainer() {
  const [state] = useStoreContext();

  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: {
      category: state.sortByCategory,
      advancedSort: state.advancedSort,
    },
  });

  if (error) throw new Error("Error with query");

  return (
    <>
      <div className="flex-col space-y-20   ">
        <SortProducts />
      </div>

      {loading ? (
        <div className="flex h-48 w-full justify-center items-center">
          <BarLoader
            className="m-0"
            loading={true}
            color={"#e8e076"}
            height={20}
            width={325}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 my-10 justify-center items-center max-w-7xl m-auto">
          {data.Product.map((product, i) => (
            <ProductItem product={product} key={i} />
          ))}
        </div>
      )}
    </>
  );
}
