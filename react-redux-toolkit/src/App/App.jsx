import { Provider } from "react-redux";
import { Cart } from "../components/Cart";
import { store } from "../state/store";
import { Products } from "../components/Products";

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>App</h1>
        <Products />
        <hr />
        <Cart />
      </div>
    </Provider>
  );
};
