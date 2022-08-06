import React, { CSSProperties } from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../utils/queries";
import ProductItem from "./ProductItem";
import ClipLoader from "react-spinners/ClipLoader";

const override = (CSSProperties = {
  borderColor: "#e8e076",
});

export default function ProductContainer() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  if (loading)
    return <ClipLoader loading={loading} cssOverride={override} size={200} />;
  if (error) console.log(error);

  return (
    <div className="">
      <div className="max-w-5xl grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4">
        {data.Keyboard.map((product, i) => (
          <ProductItem product={product} key={i} />
        ))}
      </div>
    </div>
  );
}
