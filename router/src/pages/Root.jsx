import { Outlet } from "react-router-dom";
import { Hero } from "../components/Hero";

export const Root = () => {
  return (
    <>
      <Hero title="PokeApi" />
      <Outlet />
    </>
  );
};
