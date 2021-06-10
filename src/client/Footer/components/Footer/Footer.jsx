import { Link } from 'react-router-dom';
import styles from './Footer.module.scss'
import { ReactComponent as Logo } from './images/logoFooter.svg';

const Footer = () => {
    return ( <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
            <p className={styles.logoWrapper}>
            <Link to='/' className={styles.logo}>
                <span className={styles.logoText}>KidsLike
                    <span>
                        <Logo className={styles.footerLogo} />
                    </span>
                </span>
                </Link>
            </p>
            <p className={styles.text}>
                {`Делаем жизнь родителей и детей изи : )`}
            </p>
            <p className={styles.text}>2020</p>
        </div>
    </footer>
    )
};

export default Footer;