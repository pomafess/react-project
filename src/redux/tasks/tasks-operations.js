import actions from './tasks-actions';
import TaskService from "./tasks-service";

const taskService = new TaskService()

export const addTask = body => async dispatch => {
  dispatch(actions.createTaskRequest());
  try {
    const data = await taskService.addTask(body)
    dispatch(actions.createTaskSuccess(data))
  }
  catch (error) {
    dispatch(actions.createTaskError(error))
  }
}


