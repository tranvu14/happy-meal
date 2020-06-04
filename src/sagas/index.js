import { all } from "redux-saga/effects";
import { actionHome } from "./home";

export default function* rootSaga() {
    yield all([
        actionHome()
    ]);
}