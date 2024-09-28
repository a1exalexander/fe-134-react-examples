import { createSlice } from '@reduxjs/toolkit';
import { apiService } from '../../services/apiService';
import { VanancyStatus } from '../../constants';

const initialState = {
    isLoading: false,
    data: [],
};

export const vacanciesSlice = createSlice({
    name: 'vacanceis',
    initialState,
    reducers: {
        setVacancies(state, action) {
            state.data = action.payload;
        },
        setLoader(state, action) {
            state.isLoading = action.payload;
        },
        updateVacancy(state, action) {
            const vacancyIndex = state.data.findIndex(
                ({ id }) => id === action.payload.id
            );
            if (vacancyIndex === -1) {
                state.data.push(action.payload);
            } else {
                state.data.splice(vacancyIndex, 1, action.payload);
            }
        },
    },
});

export const { setVacancies, setLoader, updateVacancy } =
    vacanciesSlice.actions;

export const fetchVacancies = () => async dispatch => {
    dispatch(setLoader(true));
    const vacancies = await apiService.getVacancies();
    dispatch(setVacancies(vacancies));
    dispatch(setLoader(false));
};

export const getVacancies = state => state.vacancies.data;
export const getVacanciesLoading = state =>
    state.vacancies.isLoading && state.vacancies.data.length === 0;
export const getVacanciesAmout = state => state.vacancies.data.length;
export const getOpenedVacanciesAmout = state =>
    state.vacancies.data.filter(({ status }) => status === VanancyStatus.OPENED)
        .length;
export const getClosedVacanciesAmout = state =>
    state.vacancies.data.filter(({ status }) => status === VanancyStatus.CLOSED)
        .length;

export default vacanciesSlice.reducer;
