import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import { Routes } from "./components/Routes/Routes.tsx";
import App from "./App.tsx";

import "./index.scss";

const routes = createBrowserRouter([
  {
    element: <App />,
    children: Routes,
  },
]);

createRoot(document.getElementById("root")!).render(
  <ConfigProvider theme={{ hashed: false }}>
    <RouterProvider router={routes} />
  </ConfigProvider>
);
