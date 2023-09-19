import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import ProductDetails from "./pages/ProductDetails";
import ShoppingCart from "./pages/ShoppingCart";
import Products from "./components/Products";
import '../src/index.css';
import { UserLayout } from "./components/User/UserLayout";
import { UserSignin } from "./components/User/UserSignin";
import { UserCreateAccount } from "./components/User/UserCreateAccount";
import { CartLayout } from "./components/CartLayout";

const router = createBrowserRouter([
  //  Main Layout.
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: "products/:productId",
        element: <ProductDetails />
      },  
    ],
  },

  //  User Layout.
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "signin",
        element: <UserSignin />
      },
    {  path: "createAccount",
      element: <UserCreateAccount />
    }
    ]
  },

  //  Cart Layout.
  {
    path: "/",
    element: <CartLayout />,
    children: [
      {
          path: "ShoppingCart",
        element: <ShoppingCart />
      }
    ]
 },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <RouterProvider router = {router} />
  // {/* </React.StrictMode> */}
);
