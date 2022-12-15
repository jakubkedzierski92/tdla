import { put, call, takeLatest, takeEvery, select } from "redux-saga/effects";
import { getExamples } from "./getExamples";
import { fetchExamples, selectTasks, setTasks } from "./tasksSlice";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExamplesHandler() {
  try {
    const exampleTasks = yield call(getExamples);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield call(alert, "cos poszlo nie tak");
  }
}

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks)
}

export function* tasksSaga() {
  yield takeLatest(fetchExamples.type, fetchExamplesHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler)
}
