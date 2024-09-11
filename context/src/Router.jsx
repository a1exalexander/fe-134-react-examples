import { createBrowserRouter } from "react-router-dom";
import { Root } from "./layouts/Root";
import { Home } from "./pages/Home";
import { Account } from "./pages/Account";
import { RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "account",
        Component: Account,
      },
    ],
  },
]);

export const Router = () => <RouterProvider router={router} />;
