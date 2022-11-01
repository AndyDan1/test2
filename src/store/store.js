import {combineReducers, configureStore} from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer";

const rootReducer = combineReducers({
  counter: counterReducer
})
export const createReduxStore = (initialState = {}) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState
    // preloadedState: {
    //   counter: {value: 100}
    // }
  })
}