import PropTypes from "prop-types";
import { ProductCard } from "../ProductCard";
import styles from "./ProductList.module.css";

export const ProductList = ({ products }) => {
  return (
    <ul className={styles.list}>
      {products.map(({ id, ...product }) => {
        return <ProductCard key={id} {...product}></ProductCard>;
      })}
    </ul>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      sale: PropTypes.bool,
    })
  ),
};
