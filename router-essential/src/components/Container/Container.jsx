import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './Container.module.css';

export const Container = ({ children, className }) => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};

Container.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}
