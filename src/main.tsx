import './main.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppError from './pages/Error.tsx';
import App from './pages/App.tsx';
import { ThemeProvider, createTheme } from '@mui/material';
import Post from './pages/post/index.tsx';
import Signup from './pages/signup/index.tsx';
import Login from './pages/login/index.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <AppError />,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <AppError />,
  },
  {
    element: <App />,
    errorElement: <AppError />,
    children: [
      {
        path: "/post",
        element: <Post />
      },
    ],
  },
]);

const theme = createTheme({
  palette: {
    primary: {
      main: '#3bedb7',
    },
    secondary: {
      main: '#000',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
