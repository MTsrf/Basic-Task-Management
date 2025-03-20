import { configureStore } from "@reduxjs/toolkit";
import taskSlicerReducer from "./reducers/taskSlicer";

export const store = configureStore({
  reducer: {
    task: taskSlicerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
