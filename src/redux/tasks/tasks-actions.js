import { createAction } from '@reduxjs/toolkit';

export const createTaskRequest = createAction('create/taskRequest');
export const createTaskSuccess = createAction('create/taskSuccess');
export const createTaskError = createAction('create/taskError');

export const getAllTasksRequest = createAction('create/getAllTasksRequest');
export const getAllTasksSuccess = createAction('create/getAllTasksRequest');

const actions = {
    getAllTasksRequest, getAllTasksSuccess
}

export default actions;
