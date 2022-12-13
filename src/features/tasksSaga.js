import { put, call, takeEvery } from "redux-saga/effects";
import { getExamples } from "./getExamples";
import { fetchExamples, setTasks } from "./tasksSlice";

function* fetchExamplesHandler() {
  try {
    const exampleTasks = yield call(getExamples);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield call(alert, "cos poszlo nie tak");
  }
}

export function* watchFetchExamples() {
    console.log("hej")
  yield takeEvery(fetchExamples.type, fetchExamplesHandler);
}
