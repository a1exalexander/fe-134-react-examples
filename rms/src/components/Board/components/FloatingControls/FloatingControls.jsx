import classNames from 'classnames';

import styles from './FloatingControls.module.css';

export function FloatingControls({ children }) {
    return (
        <div className={classNames(styles.FloatingControls)}>{children}</div>
    );
}
