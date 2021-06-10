import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './tasks-actions';

const tasks = createReducer([], {
    // [actions.createTaskRequest]: (_, { payload }) => payload,
    [actions.getAllTasksSuccess]: (_, { payload }) => payload,

});

const tasksNewReducer = combineReducers(
    {
        tasks
    }
);
export default tasksNewReducer;