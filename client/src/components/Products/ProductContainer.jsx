import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "../../utils/queries";
import ProductItem from "./ProductItem";
import SortProducts from "./SortProducts";
import { BarLoader } from "react-spinners";
import { useStoreContext } from "../../utils/globalstate";

export default function ProductContainer() {
  const [state, dispatch] = useStoreContext();

  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { brand: state.sortByBrand },
  });

  return (
    <div className="">
      <h3 className="text-center my-10 text-main_teal text-5xl tracking-widest ">
        Products
      </h3>
      <div className="flex-col space-y-20 ">
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
          <div className="max-w-5xl grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 m-auto gap-24 my-20">
            {data.Keyboard.map((product, i) => (
              <ProductItem product={product} key={i} />
            ))}
          </div>
        )}
      
    </div>
  );
}
