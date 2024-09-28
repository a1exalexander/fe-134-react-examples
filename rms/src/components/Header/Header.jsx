import PropTypes from 'prop-types';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Header.module.css';
import { Routes } from '../../constants';
import { getUserProfile, logout } from '../../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';

export const Header = ({ className }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userProfile = useSelector(getUserProfile);

    const onLogout = () => {
        dispatch(logout());
        navigate(Routes.LOGIN);
    };

    return (
        <header
            className={clsx('flex flex--ai-center', styles.header, className)}
        >
            <div
                className={clsx(
                    styles.box,
                    'fluid flex flex--ai-center flex--jc-space-between gap-2'
                )}
            >
                <div className={styles.logo}>RMS</div>
                <nav className={clsx("flex gap-2 flex--jc-center", styles.nav)}>
                    <NavLink to={Routes.HOME} className={styles.link}>
                        Dashboard
                    </NavLink>
                </nav>
                <div className={clsx("flex flex--ai-center gap-2 flex--jc-end", styles.actions)}>
                    <div className="flex flex--ai-center gap-2">
                        <div className="flex flex--column">
                            <span className="text-08">
                                {userProfile?.fullName}
                            </span>
                            <span className="text-08">
                                {userProfile?.email}
                            </span>
                        </div>
                        <button onClick={onLogout} className="link text-08">
                            logout
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    className: PropTypes.string,
};
