import { all, call, put, takeLatest } from 'redux-saga/effects';
import formActionTypes from './form.types';
import { updateFormDataSuccess } from './form.actions'

export function* updateFormData({ payload }) {
    try {
        yield put(updateFormDataSuccess(payload))
    } catch { }

}

export function* updateFormDataStart() {
    yield takeLatest(formActionTypes.UPDATE_FORM_DATA_START, updateFormData)
}

export function* formSagas() {
    yield all([
        call(updateFormDataStart),

    ])
}