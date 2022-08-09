import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/login";
import { StoreProvider } from "./utils/globalstate";
import ProductDetails from "./components/Products/ProductDetails"
import Cart from "./components/Cart/Cart"

export default function App() {
  return (
    <StoreProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
      </Routes>
    </StoreProvider>
  );
}
