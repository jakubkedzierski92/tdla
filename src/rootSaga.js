import { all } from "redux-saga/effects";
import { watchFetchExamples } from "./features/tasksSaga";

export default function* rootaSaga() {
  yield all(
    [
        watchFetchExamples()
    ]);
}
