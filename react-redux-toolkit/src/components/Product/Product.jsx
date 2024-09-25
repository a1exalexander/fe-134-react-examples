import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addProduct } from "../../state/cartSlice";

export const Product = ({ product }) => {
  const { title, price } = product;
  const dispatch = useDispatch();

  return (
    <div>
      <p>{title}</p>
      <p>Price: {price}</p>
      <button
        onClick={() =>
          dispatch(
            addProduct({
              ...product,
              count: 1,
            })
          )
        }
      >
        Add to Cart
      </button>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};
