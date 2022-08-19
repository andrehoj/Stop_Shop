import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import { StoreProvider } from "./utils/globalstate";
import ProductDetails from "./components/Products/ProductDetails";
import Cart from "./components/Cart/Cart";
import Products from "./pages/products";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { BrowserRouter } from "react-router-dom";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <StoreProvider>
        <BrowserRouter>
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
            <Route
              path="/home/ProductDetails/:id"
              element={<ProductDetails />}
            />
          </Routes>
        </BrowserRouter>
      </StoreProvider>
    </ApolloProvider>
  );
}
