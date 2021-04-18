import { combineReducers } from "@reduxjs/toolkit";
import counter from "../features/counter/counterSlice";
import todos from "../features/todo/todoSlice";

const rootReducer = combineReducers({
  counter,
  todos
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;