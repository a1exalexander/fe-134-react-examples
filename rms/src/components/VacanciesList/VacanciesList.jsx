import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './VacanciesList.module.css';
import { Container } from '../Container';
import { useSelector } from 'react-redux';
import {
    getVacancies,
    getVacanciesLoading,
} from '../../store/slices/vacanciesSlice';
import { Section } from '../Section';
import { Centered } from '../Centered';
import { Loader } from '../Loader';
import { VacancyCard } from '../VacancyCard';
import { VanancyStatus } from '../../constants';

export const VacanciesList = ({ className }) => {
    const vacancies = useSelector(getVacancies);
    const isLoading = useSelector(getVacanciesLoading);

    return (
        <Container className={clsx(styles.container, className)}>
            <Section className="relative flex flex--column gap-3">
                {isLoading ? (
                    <Centered className="absolute">
                        <Loader size={50} />
                    </Centered>
                ) : (
                    vacancies.map(vacancy => {
                        return (
                            <VacancyCard
                                id={vacancy.id}
                                key={vacancy.id}
                                title={vacancy.title}
                                candidates={vacancy?.candidates?.length}
                                opened={vacancy.status === VanancyStatus.OPENED}
                            />
                        );
                    })
                )}
            </Section>
        </Container>
    );
};

VacanciesList.propTypes = {
    className: PropTypes.string,
};
