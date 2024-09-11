import { NavLink } from "react-router-dom";
import { Routes } from "../../constants/Routes";
import styles from "./Header.module.css";
import { useUser } from "../../context/UserContext";
import { SwitchTheme } from "../SwitchTheme";

export const Header = () => {
  const { user } = useUser();

  return (
    <header className={styles.container}>
      <nav>
        <NavLink to={Routes.Home}>Home</NavLink>
        <NavLink to={Routes.Account}>Account</NavLink>
      </nav>
      <SwitchTheme />
      <div>{user.name}</div>
    </header>
  );
};
