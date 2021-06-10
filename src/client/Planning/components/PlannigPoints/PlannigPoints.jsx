import { useState } from 'react'

import styles from './PlannigPoints.module.scss'

const PlannigPoints = ({tasks = []}) => {

    // const [points, setPoints] = useState(0)
    const count = tasks.reduce((accumulator, currentValue) => {
        const {reward, days} = currentValue;
        const activeDays = days.filter(({isActive}) => isActive).length;
        return accumulator + (reward * activeDays)
    }, 0);
    return (
        <div className={styles.plannigPointsWrapper}>
            <p className={styles.planningPointsText}>Определены задач на</p>
            <span className={styles.planningPointsNumber}>{count}</span>
            <span className={styles.planningPoints}>баллов</span>
            
        </div>
    )
};

export default PlannigPoints;
