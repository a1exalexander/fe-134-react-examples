import { Button } from "../components/Button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Hello</h1>
      <Button onClick={() => {}} className="asdas">Send</Button>
    </div>
  );
}
