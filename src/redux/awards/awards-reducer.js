import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import {awards} from "./awards"
import {fetchAwardsSuccess} from './awards-actions';

const items = createReducer(awards, {
    [fetchAwardsSuccess]: (_, { payload }) => payload,
})

export default combineReducers({items})