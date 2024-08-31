import PropTypes from "prop-types";
import { Children } from "react";

const Tab = ({ icon, children, className }) => {
  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <a onClick={onClick} className={className}>
      <span className="icon">
        <i className={icon} aria-hidden="true"></i>
      </span>
      <span>{children}</span>
    </a>
  );
};

Tab.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  tabId: PropTypes.string.isRequired,
};

export const Tabs = ({ children, activeTabId, onSelect }) => {
  return (
    <div className="tabs is-toggle is-fullwidth is-large">
      <ul>
        {Children.map(children, (child) => {
          if (child?.type?.name !== "Tab") {
            console.error(
              `${child.type?.name || child?.type} element with content ${
                child?.props?.children
              } isn't a Tab`
            );
            return null;
          }

          const { tabId } = child.props;
          const onKeyUp = (e) => {
            if (e.key === "Enter") {
              onSelect(tabId);
            }
          };
          const onClick = () => onSelect(tabId);

          return (
            <li
              role="button"
              tabIndex={-1}
              onKeyUp={onKeyUp}
              onClick={onClick}
              className={activeTabId === tabId ? "is-active" : ""}
            >
              {child}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.node,
  activeTabId: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
};

Tabs.Tab = Tab;
