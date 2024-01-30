import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Authentication from './pages/Authentication/Authentication';
import Calender from './pages/Calender/Calender';
import Chat from './pages/Chat/Chat';
import Friends from './pages/Friends/Friends';
import Info from './pages/Info/Info';
import Newsletter from './pages/Newsletter/Newsletter';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "authentication",
        element: <Authentication />,
      },
      {
        path: "calender",
        element: <Calender />,
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
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
