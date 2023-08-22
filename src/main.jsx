import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import ProductDetails from "./pages/ProductDetails";
import Discounts from "./pages/Discounts";
import Products from "./components/Products";
import '../src/index.css';
// Import css files


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      { path: "products/:productId", element: <ProductDetails /> },
      { path: "products/discounts", element: <Discounts /> },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <RouterProvider router = {router} />
  // {/* </React.StrictMode> */}
);
