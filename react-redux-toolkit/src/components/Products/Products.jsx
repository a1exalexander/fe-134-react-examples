import { useSelector } from "react-redux";
import { Product } from "../Product";
import { selectors } from "../../state/productsSlice";

export const Products = () => {
  const products = useSelector(selectors.getProducts);
  return (
    <div>
      {products.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </div>
  );
};
