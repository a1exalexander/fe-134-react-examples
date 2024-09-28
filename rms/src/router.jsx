import { createBrowserRouter } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Root } from './layouts/Root/Root';
import { Login } from './pages/Login/Login';
import { SignUp } from './pages/SignUp';
import { Dashboard } from './pages/Dashboard';
import { redirect } from 'react-router-dom';
import { Routes } from './constants';
import { Vacancy } from './pages/Vacancy';

const withAuth = () => {
    if (!Cookies.get('authToken')) {
        return redirect(Routes.LOGIN);
    }
    return null;
};

const withoutAuth = () => {
    if (Cookies.get('authToken')) {
        return redirect(Routes.HOME);
    }
    return null;
};

export const router = createBrowserRouter([
    {
        path: '/login',
        Component: Login,
        loader: withoutAuth,
    },
    {
        path: '/sign-up',
        Component: SignUp,
        loader: withoutAuth,
    },
    {
        path: '/',
        Component: Root,
        children: [
            {
                path: '',
                Component: Dashboard,
            },
            {
                path: 'vacancies/:id',
                Component: Vacancy,
            }
        ],
        loader: withAuth,
    },
]);
