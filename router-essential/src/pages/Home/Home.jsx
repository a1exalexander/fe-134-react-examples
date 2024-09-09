import { Outlet } from "react-router-dom";
import { AppLink } from "../../components/AppLink";
import { Container } from "../../components/Container";
import styles from './Home.module.css';
import { Routes } from "../../constants/Routes";

export const Home = () => {
  return (
    <Container className={styles.container}>
      <h1>Home</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
        autem eum deserunt voluptates perferendis cupiditate repellat incidunt
        optio fuga earum.
      </p>
      <div className={styles.tabsView}>
        <nav className={styles.tabs}>
            <AppLink to={Routes.home}>Shop</AppLink>
            <AppLink to={Routes.sale}>Sale</AppLink>
        </nav>
        <Outlet />
      </div>
    </Container>
  );
};
