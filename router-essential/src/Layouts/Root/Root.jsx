import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";
import styles from "./Root.module.css";
import { Header } from "../../components/Header";

export const Root = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
          <Outlet />
      </main>
      <Footer />
    </>
  );
};
