import { AppLink } from "../../components/AppLink";
import { Container } from "../../components/Container";
import { Routes } from "../../constants/Routes";
import styles from "./Contact.module.css";

console.log("Contact imported");

const Contact = () => {
  return (
    <div className={styles.page}>
      <Container className={styles.container}>
        <AppLink className={styles.back} to={Routes.home}>
          🔙 Back to Home
        </AppLink>
        <h1>Contact</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
          autem eum deserunt voluptates perferendis cupiditate repellat incidunt
          optio fuga earum.
        </p>
      </Container>
    </div>
  );
};

export default Contact;
