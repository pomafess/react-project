import { useState } from 'react'

import DaysList from '../DaysList'
import Button from '../../../../shared/components/Button'

import styles from './SelectDay.module.scss'



const SelectDay = () => {
    
    const [showDayList, setShowDayList] = useState(false)


    const onClickHandler = () =>{
        setShowDayList(true);
    }
    
    return (
        <>
            { showDayList && <DaysList />}
            {!showDayList ?
                (<Button className={styles.selectBtn} aria-haspopup="true"
                    aria-expanded={showDayList} onClick={onClickHandler}>
                    <span className={styles.selectBtnWrapper}>+</span>
                </Button>) :
                (<Button className={styles.selectBtn} aria-haspopup="true"
                    aria-expanded={showDayList}  onClick={onClickHandler}>
                    <span className={styles.selectBtnWrapper}>ok</span>
                </Button>)}
        </>
    )
};

export default SelectDay;
