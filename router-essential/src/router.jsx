import { createBrowserRouter } from "react-router-dom";
import { Root } from "./Layouts/Root";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Shop } from "./pages/Shop";
import { Sale } from "./pages/Sale";
import { Product, loader as productLoader } from "./pages/Product";
import { Container } from "./components/Container";
import { Link } from "react-router-dom";
import { Routes } from "./constants/Routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: "",
        element: <Home />,
        children: [
          {
            index: true,
            Component: Shop,
          },
          {
            path: "sale",
            Component: Sale,
          },
        ],
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "shop",
        element: (
          <Container>
            <Shop isTitle />
          </Container>
        ),
      },
    ],
  },
  {
    path: "/contact",
    Component: Contact,
  },
  {
    path: "/:slug",
    Component: Product,
    loader: productLoader,
    errorElement: (
      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to={Routes.shop}>Go to Shop</Link>
      </div>
    ),
  },
]);
