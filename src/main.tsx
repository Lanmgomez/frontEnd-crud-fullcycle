import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Routes } from "./components/Routes/Routes.tsx";
import { ConfigProvider } from "antd";

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
