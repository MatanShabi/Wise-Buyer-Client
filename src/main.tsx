import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './features/login/index.tsx';
import AppError from './AppError.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <AppError />,
  },
  // TODO: placeholer to implement childs 
  // {
  //   element: <App />,
  //   errorElement: <AppError />,
  //   children: [
  //     {
  //       path: "/post",
  //       element: <Post/>
  //     },
  //   ],
  // },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
