import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'

import styles from './AuthNav.module.scss'

const AuthNav = ({toggleBurger}) => (
    <div className={styles.navigation}>
        <NavLink to='/auth' className={styles.link} activeClassName={styles.active} onClick={toggleBurger}>Авторизоваться</NavLink>
        {/*<NavLink to='/contacts' className={styles.link} activeClassName={styles.active} onClick={toggleBurger}>Контакты</NavLink>*/}
    </div>
);

AuthNav.defaultProps = {
    toggleBurger: () => {}
}

AuthNav.propTypes = {
    toggleBurger: PropTypes.func,
}

export default AuthNav;