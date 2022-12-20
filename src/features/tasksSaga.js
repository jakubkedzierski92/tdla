import { put, call, takeLatest, takeEvery, select, delay } from "redux-saga/effects";
import { getExamples } from "./getExamples";
import { fetchExamples, selectTasks, fetchExamplesError, fetchExamplesSuccess } from "./tasksSlice";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExamplesHandler() {
  const loader = delay(2000)
  try {
    yield loader;
    const exampleTasks = yield call(getExamples);
    yield put(fetchExamplesSuccess(exampleTasks));
  } catch (error) {
    yield put(fetchExamplesError)
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
