import * as moment from 'moment';

import styles from './CurrentPlanningWeek.module.scss'

const CurrentPlanningWeek = () => {
  const startOfWeek = moment()
    .startOf('week')
    .format('DD');
  const endOfWeek = moment()
    .endOf('week')
    .format('DD.MM.YYYY');

  return (
    <p className={styles.planForWeek}>План на неделю: <span className={styles.week}>
        {startOfWeek} - {endOfWeek}</span></p>)
};

export default CurrentPlanningWeek;
