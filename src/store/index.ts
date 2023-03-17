// import createSagaMiddleware from '@redux-saga/core'
import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'
import letterSaga from './alphabet/alphabet.saga'
// import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { alphabetReducer } from './alphabet/alphabet.slice'

const saga = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        alphabet: alphabetReducer
    },
    middleware: [saga]
})

saga.run(letterSaga)

// setupListeners(store.dispatch)

//создаем чтобы знать с какими данными работать в стейте, need for useAppSelector
export type RootState = ReturnType<typeof store.getState>
