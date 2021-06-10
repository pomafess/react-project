import actions from './auth-actions';
import tasksActions from "../tasks/tasks-actions"
import AuthService from "./auth-service";
import Logo from "../../shared/components/Logo";

const authService = new AuthService()

export const register = body => async dispatch => {
  dispatch(actions.registerRequest());
  try {
    const data = await authService.register(body)
    authService.saveToken(data.token)
    dispatch(actions.registerSuccess(data))
  }
  catch (error) {
    dispatch(actions.registerError(error.message))
  }
}

export const logIn = body => async dispatch => {
    dispatch(actions.loginRequest())
    try {
      const data = await authService.logIn(body);
      authService.saveToken(data.token);
      dispatch(actions.loginSuccess(data))
    } catch (error) {
        dispatch(actions.loginError(error.message))
    }
};

export const getUser = body => async dispatch => {
    dispatch(actions.getUserRequest())
    try {
        authService.loadToken();
        const token = authService.getToken();
        if(!token){
            return;
        }
        const data = await authService.getUser(body);
        data.token = token;

        data.week.tasks = data.week.tasks.map(item => {
            const {days} = item;
            item.days = days.map(day => ({...day, isActive: true}));
            return item;
        })
        dispatch(actions.getUserSuccess(data))
        dispatch(tasksActions.getAllTasksSuccess(data.week.tasks))
    } catch (error) {
        dispatch(actions.loginError(error.message))
    }
};

