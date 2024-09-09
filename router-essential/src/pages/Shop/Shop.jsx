import PropTypes from "prop-types";
import { products } from "../../data";
import styles from './Shop.module.css';
import { ProductList } from "../../components/ProductList";

export const Shop = ({ isTitle }) => {
  return (
    <div className={styles.container}>
      {isTitle && <h1>My Shop</h1>}
      <ProductList products={products} />
    </div>
  );
};

Shop.propTypes = {
    isTitle: PropTypes.bool,
};
