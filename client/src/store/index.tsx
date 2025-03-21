import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';

import transactionReducer from "./transactionReducer";

const rootReducer = combineReducers({
    transactions: transactionReducer,
});

const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store