import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import { GlobalContextProvider } from './common'
import { LayoutComponent } from './layout/Layout';
import { EmailPage, ProductPage, AddProductPage } from './pages';

import './common/styles/reset.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutComponent />,
    children: [
      {
        index: true,
        element: <EmailPage />
      },
      {
        path: "/products",
        element: <ProductPage />
      },
      {
        path: "/add-product",
        element: <AddProductPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <RouterProvider router={router} />
    </GlobalContextProvider>
  </React.StrictMode>
)
