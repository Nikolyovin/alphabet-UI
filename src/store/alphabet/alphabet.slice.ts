import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { currentPictureAndNameType, ILetter } from '../../types/types'

type InitialStateType = {
    isModalForPicture: boolean
    letters: ILetter[]
    isLoading: boolean
    currentLetter: string
    currentPictureAndName: currentPictureAndNameType
}

const initialState: InitialStateType = {
    isModalForPicture: false,
    letters: [],
    isLoading: false,
    currentLetter: '',
    currentPictureAndName: { url: '', name: '' }
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
        },
        setCurrentPicture(state, action: PayloadAction<currentPictureAndNameType>) {
            state.currentPictureAndName = action.payload
        }
    }
})

export const alphabetActions = alphabetSlice.actions
export const alphabetReducer = alphabetSlice.reducer
