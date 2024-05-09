/* eslint-disable react-refresh/only-export-components */
import React, { Suspense } from "react";

const ProductApp = React.lazy(() => import("productApp/product"));
const CartApp = React.lazy(() => import("cartApp/cart"));

export default function dashboard() {
  return (
    <div>
      <h1>Product</h1>
      <Suspense fallback={<div>loading...</div>}>
        <ProductApp />
      </Suspense>

      <h1>Cart</h1>
      <Suspense fallback={<div>loading...</div>}>
        <CartApp />
      </Suspense>
    </div>
  );
}
