import Home from "./components/Home/Home";
import HomeProducts from "./components/Home/HomeProducts";
import ProductsPage from "./Pages/ProductsPage";
import ErrorPage from "./Pages/ErrorPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import Root from "./Pages/Root";
import { Route, createRoutesFromElements, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import CartPage from "./Pages/CartPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      errorElement={<ErrorPage />}
      children={
        <>
          <Route
            index={true}
            element={
              <>
                <Home />
                <HomeProducts />
              </>
            }
          />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:productId" element={<ProductDetailsPage />} />
          <Route path="cart" element={<CartPage />} />
        </>
      }
    />
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
