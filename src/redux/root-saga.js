import { all, call } from "@redux-saga/core/effects";
import { userSagas } from './user/user.sagas';
import { formSagas } from "./form/form.sagas";


export default function* rootSaga() {
    yield all([
        call(userSagas),
        call(formSagas)
    ])
}