import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
    cleanVacancy,
    fetchVacancy,
    getVacancy,
    getVacancyLoader,
} from '../../store/slices/vacancySlice';
import { Section } from '../../components/Section';
import { Centered } from '../../components/Centered';
import { MultipleContainers } from '../../components/Board';
import { CandidateStatus } from '../../constants';
import { useCallback } from 'react';
import { Loader } from '../../components/Loader';

// const getCandidatesByStatus = () =>

export const Vacancy = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const vacancy = useSelector(getVacancy);
    const isLoading = useSelector(getVacancyLoader);

    const getCandidatesIds = useCallback(
        statusCode => {
            return (vacancy?.candidates || [])
                .filter(({ status }) => status === statusCode)
                .map(({ id }) => id);
        },
        [vacancy]
    );

    const sortedCandidates = useMemo(() => {
        return {
            [CandidateStatus.REJECTED]: getCandidatesIds(
                CandidateStatus.REJECTED
            ),
            [CandidateStatus.PENDING]: getCandidatesIds(
                CandidateStatus.PENDING
            ),
            [CandidateStatus.INTERVIEW]: getCandidatesIds(
                CandidateStatus.INTERVIEW
            ),
            [CandidateStatus.TASK]: getCandidatesIds(CandidateStatus.TASK),
            [CandidateStatus.FINAL_INTERVIEW]: getCandidatesIds(
                CandidateStatus.FINAL_INTERVIEW
            ),
            [CandidateStatus.OFFER]: getCandidatesIds(CandidateStatus.OFFER),
        };
    }, [getCandidatesIds]);

    const onChange = data => {
        console.log(data);
    };

    useEffect(() => {
        if (id) {
            dispatch(fetchVacancy(id));
        }
        return () => {
            dispatch(cleanVacancy());
        };
    }, [id]);

    return (
        <>
            <Section>
                <Centered className="pt-4">
                    <h1 className="text-2">{vacancy?.title}</h1>
                </Centered>
            </Section>
            <Section className="relative">
                {isLoading && <Loader size={40} overlay />}
                <MultipleContainers
                    items={sortedCandidates}
                    onChange={onChange}
                />
            </Section>
        </>
    );
};
