import { Section } from "../components/Section";
import { useTheme } from "../context/ThemeContext";
import { useUser } from "../context/UserContext";

export const Home = () => {
  const { user } = useUser();
  const { theme } = useTheme();

  return (
    <div>
      <h1>Home</h1>
      <p>{user?.name}</p>
      <Section />
      <p>Theme: {theme}</p>
    </div>
  );
};
