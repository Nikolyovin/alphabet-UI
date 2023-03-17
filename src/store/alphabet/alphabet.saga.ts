import { call, put, takeEvery } from 'redux-saga/effects'
import { alphabetActions } from './alphabet.slice'

function* workGetLettersFetch(): any {
    const letters = yield call(() => fetch('http://95.83.149.6:5000/api/letters'))
    const formattedLetters = yield letters.json()
    yield put(alphabetActions.getLettersSuccess(formattedLetters))
}

function* letterSaga() {
    yield takeEvery('alphabet/getLettersFetch', workGetLettersFetch) //имя слайса слэш название редьюсера
}

export default letterSaga
