import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home';
//import Authentication from './pages/Authentication/Authentication';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Calendar from './pages/Calendar/Calendar';
import Chat from './pages/Chat/Chat';
import Friends from './pages/Friends/Friends';
import Info from './pages/Info/Info';
import Newsletter from './pages/Newsletter/Newsletter';
import { ThemeProvider } from '@mui/material/styles';
import { websiteTheme } from './WebsiteTheme';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
      },
      {
        path: "chat",
        element: <Chat />,
      },
      {
        path: "friends",
        element: <Friends />,
      },
      {
        path: "info",
        element: <Info />,
      },
    ],
  },
  {
    path: "*",
    element: <div>Route Not Found</div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={websiteTheme}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
