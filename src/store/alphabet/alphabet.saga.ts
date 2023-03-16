import { call, put, takeEvery } from 'redux-saga/effects'

function* workGetLettersFetch() {}

function* letterSaga() {
    yield takeEvery('alphabet/getLettersFetch', workGetLettersFetch) //имя слайса слэш название редьюсера
}
