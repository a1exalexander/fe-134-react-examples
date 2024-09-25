import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeProduct, actions } from "../../state/cartSlice";

export const ProductCartItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <span>{product.title}</span>{" "}
      <span>(Price: {product.price * product.count})</span>{" "}
      <span>count: x{product.count}</span>
      <div>
        <button onClick={() => dispatch(actions.increaseProductCount(product.id))}>
          +
        </button>
        <button onClick={() => dispatch(removeProduct(product.id))}>-</button>
      </div>
    </li>
  );
};

ProductCartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }),
};
