import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ILetter } from '../../types/types'

type InitialStateType = {
    isModalForPicture: boolean
    letters: ILetter[]
    isLoading: boolean
    currentLetter: string
}

const initialState: InitialStateType = {
    isModalForPicture: false,
    letters: [],
    isLoading: false,
    currentLetter: ''
}

export const alphabetSlice = createSlice({
    name: 'alphabet',
    initialState,
    reducers: {
        isOpenModalForPicture(state, action: PayloadAction<boolean>) {
            state.isModalForPicture = action.payload
        },
        getLettersFetch(state) {
            state.isLoading = true
        },
        getLettersSuccess(state, action: PayloadAction<ILetter[]>) {
            state.letters = action.payload
            state.isLoading = false
        },
        setCurrentLetter(state, action: PayloadAction<string>) {
            state.currentLetter = action.payload
        }
    }
})

export const alphabetActions = alphabetSlice.actions
export const alphabetReducer = alphabetSlice.reducer
