import { Container } from "../../components/Container";
import styles from './About.module.css';

console.log('About');


export const About = () => {
  return (
    <div className={styles.page}>
      <Container className={styles.container}>
        <h1>About</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
          autem eum deserunt voluptates perferendis cupiditate repellat incidunt
          optio fuga earum.
        </p>
      </Container>
    </div>
  );
};
