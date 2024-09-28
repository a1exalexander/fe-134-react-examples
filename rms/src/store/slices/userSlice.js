import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { apiService } from '../../services/apiService';

const createUserEntitie = user => {
    return {
        ...user,
        fullName: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
    };
};

const initialState = {
    profile: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.profile = action.payload;
        },
        removeUser(state) {
            state.profile = null;
        },
    },
});

export const { setUser, removeUser } = userSlice.actions;

export const login =
    ({ email, password }) =>
    async dispatch => {
        const user = await apiService.login({ email, password });
        dispatch(setUser(createUserEntitie(user)));
    };

export const logout = () => dispatch => {
    Cookies.remove('authToken');
    dispatch(removeUser());
};

export const fetchUser = () => async dispatch => {
    try {
        const user = await apiService.getUser();
        if (user) {
            dispatch(setUser(createUserEntitie(user)));
        } else {
            dispatch(removeUser);
        }
    } catch {
        dispatch(removeUser);
    }
};

export const isUserAuth = state => {
    return !!state.user.profile;
};

export const getUserProfile = state => {
    return state.user.profile;
};

export default userSlice.reducer;
