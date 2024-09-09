import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ProductCard.module.css";

export const ProductCard = ({ title, slug, price, sale }) => {
  return (
    <li className={styles.card}>
      {sale && <span className={styles.sale}>Sale</span>}
      <Link to={`/${slug}`} className={styles.title}>
        {title}
      </Link>
      <p className={styles.price}>{price}</p>
      <button>Add to cart</button>
    </li>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  sale: PropTypes.bool,
};
