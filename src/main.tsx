import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserCardInfosById from './components/crudUsers/components/UserCardInfosById.tsx';
import Crud from './components/crudUsers/Crud.tsx';

const routes = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Crud />
      },
      { 
        path: "/users/:id", 
        element: <UserCardInfosById /> 
      },
    ],
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={routes} />
);
