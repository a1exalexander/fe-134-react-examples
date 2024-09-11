import { Router } from "../Router";
import { UserContextProvider } from "../context/UserContext";
import { ThemeContextProvider } from "../context/ThemeContext";

export const App = () => {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <Router />
      </UserContextProvider>
    </ThemeContextProvider>
  );
};
