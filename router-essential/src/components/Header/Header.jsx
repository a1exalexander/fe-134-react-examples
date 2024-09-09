import { Container } from "../Container";
import styles from "./Header.module.css";
import { Routes } from "../../constants/Routes";
import { AppLink } from "../AppLink";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <nav className={styles.nav}>
          <AppLink to={Routes.home}>Home</AppLink>
          <AppLink to={Routes.shop}>Shop</AppLink>
          <AppLink to={Routes.about}>About</AppLink>
          <AppLink to={Routes.contact}>Contact</AppLink>
        </nav>
      </Container>
    </header>
  );
};
