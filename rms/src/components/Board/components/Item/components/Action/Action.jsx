import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Action.module.css';

export const Action = forwardRef(
    ({ active, className, cursor, style, ...props }, ref) => {
        return (
            <button
                ref={ref}
                {...props}
                className={classNames(styles.Action, className)}
                tabIndex={0}
                style={{
                    ...style,
                    cursor,
                    '--fill': active?.fill,
                    '--background': active?.background,
                }}
            />
        );
    }
);

Action.displayName = 'Action';

Action.propTypes = {
    active: PropTypes.shape({
        fill: PropTypes.string,
        background: PropTypes.string,
    }),
    className: PropTypes.string,
    cursor: PropTypes.string,
    style: PropTypes.object,
};
