import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/lib/store'

// Define a type for the slice state

export type PopUpType = 'about' | undefined;
export interface PopUpState {
    active: boolean,
    popUpType: PopUpType,
}

// Define the initial state using that type
const initialState: PopUpState = {
    active: false,
    popUpType: 'about',
}

export const popUpSlice = createSlice({
    name: 'popUp',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setActive: (state, action: PayloadAction<boolean>) => {
            state.active = action.payload
        },
        setPopUpType: (state, action: PayloadAction<PopUpType>) => {
            state.popUpType = action.payload
        },
    }
})

export const { setActive, setPopUpType } = popUpSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectActive = (state: RootState) => state.popUp.active
export const selectPopUpType = (state: RootState) => state.popUp.popUpType

export default popUpSlice.reducer