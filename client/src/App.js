import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import { StoreProvider } from "./utils/globalstate";
import ProductDetails from "./components/Products/ProductDetails";
import Cart from "./components/Cart/Cart";
import Products from "./pages/products";

export default function App() {
  return (
    <StoreProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Registration/:type" element={<Registration />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/products/ProductDetails/:id"
          element={<ProductDetails />}
        />
        <Route path="/home/ProductDetails/:id" element={<ProductDetails />} />
      </Routes>
    </StoreProvider>
  );
}
