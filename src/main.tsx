import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import IsolateItemData from './components/crudUsers/components/IsolateItemData.tsx';
import CrudUsers from './components/crudUsers/CrudUsers.tsx';

const routes = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <CrudUsers />
      },
      { 
        path: "/users/:id", 
        element: <IsolateItemData /> 
      },
    ],
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={routes} />
);
