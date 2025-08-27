import { takeLatest, call, put } from 'redux-saga/effects';

import actions from './fruitsActions';
import { getAllFruits, getFruits } from '../../services/fruitsService';

function* fetchAllFruitsSaga() {
    try {
        const response = yield call(getAllFruits);
        yield put(actions.fetchSuccess(response));
    } catch(error) {
        // TODO: error modal
    }
}

function* fetchFruitsSaga({ payload: { name, color, inSeason } }) {
    try {
        const response = yield call(getFruits, name, color, inSeason);
        yield put(actions.fetchSuccess(response));
    } catch(error) {
        // TODO: error modal
    }
}

export function* fruitsSagas() {
    yield takeLatest(actions.fetchAll, fetchAllFruitsSaga);
    yield takeLatest(actions.fetch, fetchFruitsSaga);
}