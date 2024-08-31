import { useEffect, useState } from "react";
import { StudentsList } from "../components/StudentsList";
import styles from "./App.module.css";
import { fetchGithubUsers } from "../api/githubApi";

export const App = () => {
  const [studends, setStudents] = useState([]);

  const fetchStudents = async () => {
    const data = await fetchGithubUsers();
    setStudents(data);
  }

  useEffect(() => {
    fetchStudents();
  }, []);

  console.log(studends);
  

  return (
    <div className={styles.container}>
      <StudentsList
        data={studends}
      />
    </div>
  );
};
