import PropTypes from "prop-types";
import { UserCard } from "../UserCard";
import styles from "./Section.module.css";

export const Section = ({ name }) => {
  return (
    <div className={styles.container}>
      <p>Some Section</p>
      <UserCard name={name} />
    </div>
  );
};

Section.propTypes = {
  name: PropTypes.string,
};
