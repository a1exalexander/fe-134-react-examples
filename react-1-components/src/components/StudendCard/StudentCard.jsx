import PropTypes from "prop-types";
import styles from "./StudentCard.module.css";

export const StudentCard = ({ name, avatar, github }) => {
  return (
    <li className={styles.container}>
      <img
        className={styles.image}
        src={avatar}
        alt={name}
      />
      {name ? <span className={styles.name}>{name}</span> : null}
      <a className={styles.github} target="_blank" href={`https://github.com/${github}`}>
        {github}
      </a>
    </li>
  );
};

StudentCard.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};
