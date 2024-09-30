import styles from './OverflowWrapper.module.css';

export function OverflowWrapper({ children }) {
    return <div className={styles.OverflowWrapper}>{children}</div>;
}
