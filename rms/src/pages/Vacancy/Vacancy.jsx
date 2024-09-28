import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchVacancy, getVacancy } from '../../store/slices/vacancySlice';
import { Section } from '../../components/Section';
import { Centered } from '../../components/Centered';
import { useState } from 'react';

const board = {
    columns: [
        {
            id: 1,
            title: 'Backlog',
            cards: [
                {
                    id: 1,
                    title: 'Add card',
                    description: 'Add capability to add a card in a column',
                },
            ],
        },
        {
            id: 2,
            title: 'Doing',
            cards: [
                {
                    id: 2,
                    title: 'Drag-n-drop support',
                    description: 'Move a card between the columns',
                },
            ],
        },
    ],
};

export const Vacancy = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const vacancy = useSelector(getVacancy);
    const [controlledBoard, setBoard] = useState(board);

    function handleCardMove(_card, source, destination) {
        const updatedBoard = moveCard(controlledBoard, source, destination);
        setBoard(updatedBoard);
    }

    useEffect(() => {
        if (id) {
            dispatch(fetchVacancy(id));
        }
    }, [id]);

    const onColumnNew = (newColumn) => {
        return { id: 'asdasd', ...newColumn };
    }

    return (
        <>
            <Section>
                <Centered className="pt-4">
                    <h1 className="text-2">{vacancy?.title}</h1>
                </Centered>
            </Section>
        </>
    );
};
