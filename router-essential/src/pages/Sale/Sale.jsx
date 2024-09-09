import { products } from "../../data";
import styles from './Sale.module.css';
import { ProductList } from "../../components/ProductList";

export const Sale = () => {
  return (
    <div className={styles.container}>
      <ProductList products={products.filter(({sale}) => sale)} />
    </div>
  );
};