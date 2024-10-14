import { RouterProvider } from "react-router-dom";
import { router } from "../router";

export const App = () => {
  console.log(import.meta.env.VITE_API_KEY);
  
  return <RouterProvider router={router} />;
};
