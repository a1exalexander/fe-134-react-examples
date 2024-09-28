import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './VacancyCard.module.css';
import { Link } from 'react-router-dom';
import { Routes } from '../../constants';

export const VacancyCard = ({ className, id, title, candidates, opened }) => {
    return (
        <Link
            to={`${Routes.VACANCIES}/${id}`}
            className={clsx(
                'card flex flex--ai-center flex--jc-space-between',
                styles.card,
                { [styles.opened]: opened },
                className
            )}
        >
            <div>
                <span className="text--bold text-12">{title}</span>
            </div>
            <div className="flex flex--ai-center">
                <span className="text-12 text--bold">{candidates}</span>
                <span className="ml-1">candidates</span>
            </div>
        </Link>
    );
};

VacancyCard.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    candidates: PropTypes.number.isRequired,
    opened: PropTypes.bool,
};
