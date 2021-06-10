import {getUser} from "../../redux/auth/selectors";
import {Redirect} from "react-router-dom";
import {shallowEqual, useSelector} from "react-redux";
import styles from "../../client/Planning/pages/PlanningPage/PlanningPage.module.scss";
import CurrentPlanningWeek from "../../client/Planning/components/CurrentPlanningWeek";
import PlannigPoints from "../../client/Planning/components/PlannigPoints";
import NewTask from "../../client/Tasks/components/NewTask";
import TasksList from "../../client/Tasks/components/TasksList";

const MainPage = () => {
  const {tasks: allTasks} = useSelector(({tasks}) => tasks, shallowEqual);
  return (
      <section className={styles.planningPage}>
        <div className={styles.container}>
          <div className={styles.planningPageContainer}>
            <CurrentPlanningWeek/>
            <div className={styles.planningPageWrapper}>
              <PlannigPoints tasks={allTasks}/>
            </div>

          </div>
          <TasksList tasks={allTasks}/>
        </div>
        <div className={styles.planningPageWrapperMobile}>
          <PlannigPoints/>
          <NewTask/>
        </div>
      </section>
  )
}

export default MainPage
