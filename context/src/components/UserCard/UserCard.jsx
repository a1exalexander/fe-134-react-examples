import { useUser } from "../../context/UserContext";
import styles from "./UserCard.module.css";

export const UserCard = () => {
  const { user, clean } = useUser();
  return (
    <div className={styles.card}>
      <p>User Name: {user.name}</p>
      <button onClick={() => clean()}>Clean data</button>
    </div>
  );
};
