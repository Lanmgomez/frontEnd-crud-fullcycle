import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Routes } from './components/crudUsers/components/Routes/Routes.tsx';

const routes = createBrowserRouter([
  {
    element: <App />,
    children: Routes
  }
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={routes} />
);
