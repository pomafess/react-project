import PropTypes from 'prop-types'

import SiteNavItem from '../SiteNavItem'
import SiteNavItems from '../SiteNavItems'

import styles from './SiteNavList.module.scss'

const SiteNavList = ({toggleBurger}) => {
    const siteNav = [...SiteNavItems].map(item => <SiteNavItem {...item} key={item.id} toggleBurger={toggleBurger} /> )
    return (
        <ul className={styles.navigation}>
            {siteNav}
        </ul>
    )
}

SiteNavList.defaultProps = {
    toggleBurger: () => {}
}

SiteNavList.propTypes = {
    toggleBurger: PropTypes.func,
}

export default SiteNavList;