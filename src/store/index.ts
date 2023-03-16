import createSagaMiddleware from '@redux-saga/core'
import { configureStore } from '@reduxjs/toolkit'
// import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { alphabetReducer } from './alphabet/alphabet.slice'

const saga = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        alphabet: alphabetReducer
    },
    middleware: [saga]
})

// setupListeners(store.dispatch)

//создаем чтобы знать с какими данными работать в стейте, need for useAppSelector
export type RootState = ReturnType<typeof store.getState>
