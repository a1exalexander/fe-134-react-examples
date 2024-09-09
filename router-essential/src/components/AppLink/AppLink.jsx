import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./AppLink.module.css";

export const AppLink = ({ className, ...props }) => {
  return <NavLink {...props} className={clsx(styles.link, className)} />;
};

AppLink.propTypes = {
  ...NavLink.propTypes,
  className: PropTypes.string,
};
