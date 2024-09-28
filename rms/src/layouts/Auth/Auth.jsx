import PropTypes from 'prop-types';
import styles from './Auth.module.css';
import { Card } from '../../components/Card';

export const Auth = ({ children, title }) => {
    return (
        <div className={styles.container}>
            <Card width={400} className={styles.card}>
                <h1 className={styles.title}>{title}</h1>
                {children}
            </Card>
        </div>
    );
};

Auth.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};
