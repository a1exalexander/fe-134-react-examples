import PropTypes from "prop-types";
import clsx from "clsx";

export const Button = ({
  children,
  icon,
  isLoading,
  theme = "warning",
  onClick,
}) => {
  return (
    <button
      disabled={isLoading}
      onClick={onClick}
      className={clsx("button", {
        "is-loading": isLoading,
        [`is-${theme}`]: theme !== "empty",
      })}
    >
      {icon && (
        <span className="icon">
          <i className={icon}></i>
        </span>
      )}
      <span>{children}</span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.string,
  isLoading: PropTypes.bool,
  theme: PropTypes.oneOf([
    "empty",
    "link",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
  ]),
  onClick: PropTypes.func,
};
