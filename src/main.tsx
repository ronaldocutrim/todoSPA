import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from 'react-router-dom';

export const queryClient = new QueryClient();
import { LoginScreen } from './screens/login';
import './index.css';
import { TodoScreen } from './screens/todo';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
  // TODO: Add method abstract to get token
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
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
