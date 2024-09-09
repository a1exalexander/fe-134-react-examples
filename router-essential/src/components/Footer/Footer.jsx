import { Container } from "../Container";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>footer</Container>
    </footer>
  );
};
