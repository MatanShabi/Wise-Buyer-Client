import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './features/login/index.tsx';
import AppError from './AppError.tsx';
import App from './App.tsx';
import Post from './features/post/index.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <AppError />,
  },
  {
    element: <App />,
    errorElement: <AppError />,
    children: [
      {
        path: "/post",
        element: <Post/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
