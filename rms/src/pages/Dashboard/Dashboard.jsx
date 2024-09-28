import { useDispatch } from 'react-redux';
import { Stats } from '../../components/Stats';
import { useEffect } from 'react';
import {
    fetchVacancies,
    getClosedVacanciesAmout,
    getOpenedVacanciesAmout,
    getVacanciesAmout,
} from '../../store/slices/vacanciesSlice';
import { useSelector } from 'react-redux';
import { VacanciesList } from '../../components/VacanciesList';

export const Dashboard = () => {
    const dispatch = useDispatch();
    const vacanciesAmount = useSelector(getVacanciesAmout);
    const openedVacanciesAmount = useSelector(getOpenedVacanciesAmout);
    const closedVacanciesAmount = useSelector(getClosedVacanciesAmout);

    useEffect(() => {
        dispatch(fetchVacancies());
    }, []);

    return (
        <>
            <Stats
                data={[
                    { value: vacanciesAmount, title: 'Vacaniec Amount' },
                    { value: openedVacanciesAmount, title: 'Opened Vacancies', color: 'orange' },
                    { value: closedVacanciesAmount, title: 'Closed Vacancies', color: 'green' },
                ]}
            />
            <VacanciesList />
        </>
    );
};
