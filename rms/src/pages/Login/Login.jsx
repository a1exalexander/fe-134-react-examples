import { Link } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Auth } from '../../layouts/Auth';
import styles from './Login.module.css';
import { Routes } from '../../constants';
import { Button } from '../../components/Button';
import { Centered } from '../../components/Centered';
import { useDispatch } from 'react-redux';
import { login } from '../../store/slices/userSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        setIsLoading(true);
        await dispatch(login(data));
        setIsLoading(false);
        navigate(Routes.HOME);
    };

    return (
        <Auth title="Login">
            <form onSubmit={onSubmit}>
                <Input
                    required
                    className="mb-2"
                    placeholder="johnwick@gmail.com"
                    label="Email"
                    type="email"
                    name="email"
                />
                <Input
                    required
                    className="mb-3"
                    label="Password"
                    type="password"
                    name="password"
                />
                <Button isLoading={isLoading} isFluid className="mb-4">
                    Login
                </Button>
            </form>
            <Centered>
                <Link to={Routes.SIGN_UP} className={styles.link}>
                    Sign Up
                </Link>
            </Centered>
        </Auth>
    );
};
