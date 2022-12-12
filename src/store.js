import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasksSlice";
import createSagaMiddleware from "@redux-saga/core";
import { watchFetchExamples } from "./features/tasksSaga";


const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    tasks: tasksReducer,
  },
    middleware: [sagaMiddleware],
  
});

sagaMiddleware.run(watchFetchExamples);