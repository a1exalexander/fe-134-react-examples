import PropTypes from 'prop-types';
import styles from './Button.module.css';
import clsx from 'clsx';
import { Loader } from '../Loader';

export const Button = ({ children, className, isLoading, isFluid, onClick }) => {
    const habdleClick = (e) => {
        if (!isLoading) {
            onClick(e);
        }
    }
    return (
        <button
            onClick={onClick && habdleClick}
            disabled={isLoading}
            className={clsx(
                styles.button,
                { [styles.isFluid]: isFluid, [styles.isLoading]: isLoading },
                className
            )}
        >
            {isLoading && <Loader className={styles.loader} overlay size={12} />}
            {children}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    isFluid: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.string,
    isLoading: PropTypes.bool,
};
