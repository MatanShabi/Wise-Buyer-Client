import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './features/login/index.tsx';
import AppError from './AppError.tsx';
import App from './App.tsx';
import Post from './features/post/index.tsx';
import { ThemeProvider, createTheme } from '@mui/material';


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
      main: '#3bedb7',
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
