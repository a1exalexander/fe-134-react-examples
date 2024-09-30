import classNames from 'classnames';
import styles from './Button.module.css';

export function Button({ children, ...props }) {
    return (
        <button className={classNames(styles.Button)} {...props}>
            {children}
        </button>
    );
}
