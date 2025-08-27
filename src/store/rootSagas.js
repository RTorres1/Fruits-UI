import { all, fork } from "redux-saga/effects";
import { fruitsSagas } from "./fruits/fruitsSaga";

export default function* rootSagas() {
    yield all([
        fork(fruitsSagas),
    ]);
}