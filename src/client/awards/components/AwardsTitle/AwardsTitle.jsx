import React from 'react';
import { ReactComponent as Gift } from '../../../../images/Gift.svg';
import styles from './AwardsTitle.module.scss';

const AwardsTitle = () => {
    return (
       <div className={styles.container_title}>
        <Gift/>
        <h2 className={styles.title}>Мои призы</h2>
        </div> 
    )
};

export default AwardsTitle;
