import { Link } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Auth } from '../../layouts/Auth';
import styles from './SignUp.module.css';
import { Routes } from '../../constants';
import { Button } from '../../components/Button';
import { Centered } from '../../components/Centered';

export const SignUp = () => {
    return (
        <Auth title="Sign Up">
            <Input
                className="mb-2"
                placeholder="johnwick@gmail.com"
                label="Email"
                type="email"
            />
            <Input className="mb-3" label="Password" type="password" />
            <Button isFluid className="mb-4">
                Sign Up
            </Button>
            <Centered>
                <Link to={Routes.LOGIN} className={styles.link}>
                    Login
                </Link>
            </Centered>
        </Auth>
    );
};
