import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from 'react-router-dom';
import { LoginScreen } from './screens/login';
import './index.css';
import { TodoScreen } from './screens/todo';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginScreen />,
    loader: loginLoader,
  },
  {
    path: '/todos',
    loader: privateLoader,
    element: <TodoScreen />,
  },
]);

function loginLoader() {
  if (window.localStorage.getItem('token')) {
    return redirect('/todos');
  }
  return null;
}

function privateLoader() {
  if (!window.localStorage.getItem('token')) {
    return redirect('/login');
  }
  return null;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
