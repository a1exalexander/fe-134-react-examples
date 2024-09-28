import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './Centered.module.css';

export const Centered = ({ className, children }) => {
    return <div className={clsx(styles.container, className)}>{children}</div>;
};

Centered.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};
