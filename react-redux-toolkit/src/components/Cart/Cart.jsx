import { useSelector } from "react-redux";
import { ProductCartItem } from "../ProductCartItem";

export const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const isLoading = useSelector((state) => state.cart.isLoading);

  return (
    <div>
      <p>Cart</p>
      <p>Loading: {String(isLoading)}</p>
      <ul>
        {products.map((product) => {
          return <ProductCartItem key={product.id} product={product} />;
        })}
      </ul>
    </div>
  );
};
