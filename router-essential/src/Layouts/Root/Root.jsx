import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";
import styles from "./Root.module.css";
import { Header } from "../../components/Header";

console.log('Root');


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
