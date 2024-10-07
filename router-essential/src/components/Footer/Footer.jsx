import { Container } from "../Container";
import styles from "./Footer.module.css";
import ArrowIcon from '../../assets/Arrow.svg?react';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>footer
        <ArrowIcon width={20} height={20} fill="yellow" />
      </Container> 
    </footer>
  );
};
