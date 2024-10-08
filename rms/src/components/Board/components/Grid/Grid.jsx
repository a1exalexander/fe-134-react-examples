import styles from './Grid.module.css';

export function Grid({ size }) {
    return (
        <div
            className={styles.Grid}
            style={{
                '--grid-size': `${size}px`,
            }}
        />
    );
}
