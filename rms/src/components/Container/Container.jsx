import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Container.module.css';

export const Container = ({ children, className }) => {
    return <div className={clsx('container', styles.container, className)}>{children}</div>;
};

Container.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};
