import { createSlice } from '@reduxjs/toolkit';
import { apiService } from '../../services/apiService';
import { matchPath } from 'react-router-dom';

const initialState = {
    isLoading: false,
    data: null,
};

export const vacancySlice = createSlice({
    name: 'vacancy',
    initialState,
    reducers: {
        setVacancy(state, action) {
            state.data = action.payload;
        },
        setLoader(state, action) {
            state.isLoading = action.payload;
        },
    },
});

export const { setVacancy, setLoader } = vacancySlice.actions;

export const fetchVacancy = id => async dispatch => {
    dispatch(setLoader(true));
    console.log(id);
    
    const vacancy = await apiService.getVacancy(id);
    dispatch(setVacancy(vacancy));
    dispatch(setLoader(false));
};

export const getVacancy = state => {
    const { data } = state.vacancy;
    
    
    if (data) {
        return data;
    }
    const { params } = matchPath('/vacancies/:id', window.location.pathname);
    const vacancy = state.vacancies.data.find(({ id }) => id === params.id);
    return vacancy || null;
};

export default vacancySlice.reducer;
