import { useLoaderData } from "react-router-dom";
import { AppLink } from "../../components/AppLink";
import { Container } from "../../components/Container";
import { Routes } from "../../constants/Routes";
import styles from "./Product.module.css";
import { useParams } from "react-router-dom";

console.log('Product');

export const Product = () => {
  const { title, price } = useLoaderData();
  const { slug } = useParams();

  return (
    <Container className={styles.container}>
      <AppLink className={styles.back} to={Routes.home}>
        🔙 Back to Home
      </AppLink>
      <article className={styles.content}>
        <h1>{title}</h1>
        <p>Slug: {slug}</p>
        <p>{price}</p>
        <button>Add to cart</button>
      </article>
    </Container>
  );
};
