import "./styles/main.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppError from "./components/Error.tsx";
import App from "./components/App.tsx";
import { ThemeProvider, createTheme } from "@mui/material";
import Post from "./components/posts/index.tsx";
import AboutUsPage from "./components/aboutus/index.tsx";
import Signup from "./components/signup/index.tsx";
import Login from "./components/login/index.tsx";
import ProfilePage from "./components/profile/index.tsx";
import PrivacyPolicyPage from "./components/privacypolicy/index.tsx";
import CommentsPage from "./components/comments/index.tsx";

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
        element: <Post />,
      },
      {
        path: "/profile/:userId",
        element: <ProfilePage />,
      },
      {
        path: "/aboutus",
        element: <AboutUsPage />,
      },
      {
        path: "/privacypolicy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "/comments/:postId",
        element: <CommentsPage />,
      },
    ],
  },
]);

const theme = createTheme({
  palette: {
    primary: {
      main: "#3bedb7",
    },
    secondary: {
      main: "#000",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
