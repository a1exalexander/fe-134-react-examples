import PropTypes from 'prop-types';
import clsx from 'clsx';

export const Section = ({ className, children }) => {
    return <div className={clsx('section', className)}>{children}</div>;
};

Section.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};
