import React from 'react';
import LoginForm from '../../client/LoginForm/components/LoginForm';
import {Link, useHistory} from "react-router-dom"
import foto1 from './images/family1.png';
import foto2 from './images/robot.png';
import foto3 from './images/gamepad.png';
import foto4 from './images/family2.png';
import s from './AuthPage.module.scss'
import {shallowEqual, useSelector} from "react-redux";
import {getIsAuthenticated} from "../../redux/auth/selectors";
import Button from "../../shared/components/Button";

const AuthPage = () => {
    const user = useSelector(getIsAuthenticated, shallowEqual);

    return (
        <section className={s.authPageContainer}>
            <div  className="container">
            <div className={s.wrapper}>
            <div className={s.containerFoto }>
                    <div className={s.imgContainer}>
                        <img src={foto1} alt="family"/>
                    </div>
                    <div className={s.imgContainer}>
                        <img src={foto2} alt="robot"/>
                    </div>
                    <div className={s.imgContainer}>
                        <img src={foto3} alt="gamepad"/>
                    </div>
                    <div className={s.imgContainer}>
                        <img src={foto4} alt="family"/>
                    </div>
            </div>

            <div className={s.form}>
                <h1 className={s.title}>Выполняй задания,<br/> получи классные призы!</h1>
                {user && <Link to="/">
                    <Button>
                        На главную
                    </Button>
                </Link>}
                {!user && <LoginForm />}
            </div>
            </div>
        </div>
        </section>
    )
}

export default AuthPage;
