import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";
import StoreContextProvider from "./StoreContext/StoreContext.jsx";
import Home from "./pages/Home/Home.jsx";
import Menu from "./component/Menu/Menu.jsx";
import Navber from "./component/Navber/Navber.jsx";
import Footer from "./component/Footer/Footer.jsx";
import About from "./component/FoodItem/About/About.jsx";
import App from "./App.jsx";

const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: (
  //     <>
  //       <Navber />
  //       <Home />

  //       <Footer />
  //     </>
  //   ),
  // },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/about",
        element: <About/>,
      },
      // {
      //   path : ""
      // }
    ],
  },
  // {
  //   path: '/menu',
  //   element: <Menu />,
  // },
  {
    path: "/footer",
    element: <Footer />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreContextProvider>
      <RouterProvider router={router} />
      
    </StoreContextProvider>
  </React.StrictMode>
);
