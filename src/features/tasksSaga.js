import { put, call, takeEvery } from "redux-saga/effects";
import { getExamples } from "./getExamples";
import { fetchExamples, setTasks } from "./tasksSlice";

export function* fetchExamplesHandler() {
  try {
    const exampleTasks = yield call(getExamples());
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield call(alert, "cos poszlo nie tak");
  }
}

export function* watchFetchExamples() {
  yield takeEvery(fetchExamples.type);
}
