import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Card.module.css';

export const Card = ({ children, className, width }) => {
    return (
        <div
            style={width && { maxWidth: `${width}px`, width: '100%' }}
            className={clsx('card', styles.card, className)}
        >
            {children}
        </div>
    );
};

Card.propTypes = {
    width: PropTypes.number,
    className: PropTypes.string,
    children: PropTypes.node,
};
