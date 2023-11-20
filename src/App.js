import React from 'react';
import {
  Home,
  UserPage,
  RootLayout
} from './components/index'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import UserLayout from './components/rout/UserLayout';
import { ApiProvider } from './Store/Api/ApiContext';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'user/:id',
        element: <UserLayout />,
        children: [
          { index: true, element: <UserPage /> }
        ]
      }
    ]
  }
])

function App() {
  return (
    <ApiProvider>
      <div className="app">
        <RouterProvider router={router} />
      </div>
    </ApiProvider>
  );
}

export default App;
