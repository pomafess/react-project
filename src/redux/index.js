import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import authReducer  from './auth/auth-reducer';
import awardsReducer from './awards/awards-reducer';
import tasksNewReducer from './tasks/tasks-reducer'

const middleware = [
  ...getDefaultMiddleware(),
];

export const store = configureStore({
   reducer: {
      auth: authReducer,
      awards: awardsReducer,
      tasks: tasksNewReducer
},
   middleware,
   devTools: process.env.NODE_ENV === 'development',
});


