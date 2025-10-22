import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './index.css';
import StoreContextProvider from './StoreContext/StoreContext.jsx';
import Home from './pages/Home/Home.jsx';
import Menu from './component/Menu/Menu.jsx';
import Navber from './component/Navber/Navber.jsx';
import Footer from './component/Footer/Footer.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navber />
        <Home />
        
        <Footer />
      </>
    ),
  },
  {
    path: '/menu',
    element: <Menu />,
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreContextProvider>
      <RouterProvider router={router} />
    </StoreContextProvider>
  </React.StrictMode>
);
