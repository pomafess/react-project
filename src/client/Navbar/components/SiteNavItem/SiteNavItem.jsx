import { NavLink } from "react-router-dom";

import PropTypes from 'prop-types'

import styles from "./SiteNavItem.module.scss"

const SiteNavItem = ({page, to, toggleBurger}) => (
    <NavLink exact to={to} className={styles.link}  activeClassName={styles.active} onClick={toggleBurger}>{page}</NavLink>
);

SiteNavItem.defaultProps = {
    page: '',
    to: '',
    toggleBurger: () => {}
}

SiteNavItem.propTypes = {
    page: PropTypes.string,
    to: PropTypes.string,
    toggleBurger: PropTypes.func,
}


export default SiteNavItem;