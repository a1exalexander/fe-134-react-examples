import PropTypes from 'prop-types';
import clsx from 'clsx';

export const Box = ({ className, children }) => {
    return <div className={clsx('box', className)}>{children}</div>;
};

Box.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};
