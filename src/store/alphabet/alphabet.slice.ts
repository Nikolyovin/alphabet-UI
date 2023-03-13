import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialStateType = {
    isModalForPicture: boolean
}

const initialState: InitialStateType = {
    isModalForPicture: false
}

export const alphabetSlice = createSlice({
    name: 'alphabet',
    initialState,
    reducers: {
        isOpenModalForPicture(state, action: PayloadAction<boolean>) {
            state.isModalForPicture = action.payload
        }
    }
})

export const alphabetActions = alphabetSlice.actions
export const alphabetReducer = alphabetSlice.reducer
