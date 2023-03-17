import { call, put, takeEvery } from 'redux-saga/effects'
import { URL_SERVER } from '../../common/constants'
import { alphabetActions } from './alphabet.slice'

function* workGetLettersFetch(): any {
    const letters = yield call(() => fetch(`${URL_SERVER}/api/letters`))
    const formattedLetters = yield letters.json()
    yield put(alphabetActions.getLettersSuccess(formattedLetters))
}

function* letterSaga() {
    yield takeEvery('alphabet/getLettersFetch', workGetLettersFetch) //имя слайса слэш название редьюсера
}

export default letterSaga
