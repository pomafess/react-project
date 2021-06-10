import styles from './PlanningTask.module.scss'

function PlanningTask() {
    return ( 
    <div className={styles.planningTaskWrapper}>
        <p className={styles.planningTaskText}>Хочешь получить больше призов - добавь задачи :)</p>
        <button className={styles.planningTaskBtn}></button>  
     </div>)
};

export default PlanningTask;
