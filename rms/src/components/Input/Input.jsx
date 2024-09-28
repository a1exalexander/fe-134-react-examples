import PropTypes from 'prop-types';
import { useId } from 'react';
import clsx from 'clsx';
import styles from './Input.module.css';

export const Input = ({ required, name, type, label, className, ...inputProps }) => {
    const id = useId();
    return (
        <div className={clsx(styles.container, className)}>
            {label && (
                <label className={styles.label} htmlFor={id}>
                    {label}
                </label>
            )}
            <input
                {...inputProps}
                className={styles.input}
                id={id}
                name={name}
                type={type}
                required={required}
            />
        </div>
    );
};

Input.propTypes = {
    name: PropTypes.string,
    required: PropTypes.bool,
    className: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
};
