import PropTypes from "prop-types";
import styles from "./StudentsList.module.css";
import { StudentCard } from "../StudendCard/StudentCard";

export const StudentsList = ({ data }) => {
  return (
    <ul className={styles.container}>
      {data?.map((student) => {
        return (
          <StudentCard
            key={student.github}
            name={student.name}
            avatar={student.avatar}
            github={student.github}
          />
        );
      })}
    </ul>
  );
};

StudentsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(StudentCard.propTypes)),
};
