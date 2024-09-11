import { ThemeTypes } from "../../constants/ThemeTypes";
import { useTheme } from "../../context/ThemeContext";
import styles from "./SwitchTheme.module.css";

export const SwitchTheme = () => {
  const { theme, toggleTheme } = useTheme();
  const onChange = () => {
    toggleTheme();
  };

  return (
    <label className={styles.switch}>
      <input
        checked={theme === ThemeTypes.dark}
        className={styles.input}
        type="checkbox"
        onChange={onChange}
      />
      <span className={styles.button}></span>
    </label>
  );
};
