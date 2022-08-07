import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../utils/queries";
import ProductItem from "./ProductItem";
import SortProducts from "./SortProducts";
import { BarLoader } from "react-spinners";

export default function ProductContainer() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  if (loading)
    return (
      <div className="flex justify-center items-center">
        <BarLoader
          className="m-0"
          loading={true}
          color={"#e8e076"}
          height={20}
          width={300}
        />
      </div>
    );
  if (error) console.log(error);

  return (
    <div className="">
      <h3 className="text-center mb-10 text-main_teal text-5xl tracking-widest ">
        Products
      </h3>
      <div className="flex-col space-y-20">
        <SortProducts />
        <div className="max-w-5xl grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  m-auto gap-4">
          {data.Keyboard.map((product, i) => (
            <ProductItem product={product} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
