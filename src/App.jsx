import React from 'react'
import AppRoutes from './utils/AppRoutes';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
export const API_URL = 'https://6598c2bba20d3dc41ceeec81.mockapi.io/blogs'


function App() {

  const router = createBrowserRouter(AppRoutes)
  return <>
  <RouterProvider router={router} />

  </>
}

export default App
