import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import vacanciesReducer from './slices/vacanciesSlice';
import vacancyReducer from './slices/vacancySlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        vacancies: vacanciesReducer,
        vacancy: vacancyReducer,
    },
});
