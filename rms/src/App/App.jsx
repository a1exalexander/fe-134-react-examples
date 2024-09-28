import { Provider } from 'react-redux';
import { router } from '../router';
import { store } from '../store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../store/slices/userSlice';
import { RouterProvider } from 'react-router-dom';

export const Router = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUser());
    }, []);
    return <RouterProvider router={router} />;
};

export const App = () => {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
};
