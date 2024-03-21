import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/lib/store'

// Define a type for the slice state
export interface MouseState {
    x: number,
    y: number,
    followMouse: boolean,
    className?: string
}

// Define the initial state using that type
const initialState: MouseState = {
    x: 0,
    y: 0,
    followMouse: true,
    className: undefined
}

export const mouseSlice = createSlice({
    name: 'mouse',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setPosition: (state, action: PayloadAction<{
            x: number,
            y: number,
        }>) => {
            state.x = action.payload.x
            state.y = action.payload.y
        },
        setFollowMouse: (state, action: PayloadAction<boolean>) => {
            state.followMouse = action.payload
        },
        setClassName: (state, action: PayloadAction<string | undefined>) => {
            state.className = action.payload
        }
    }
})

export const { setPosition, setFollowMouse, setClassName } = mouseSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectMouse = (state: RootState) => state.mouse
export const selectMousePosition = (state: RootState) => {
    const { x, y } = state.mouse
    return { x, y }
}
export const selectFollowMouse = (state: RootState) => state.mouse.followMouse

export default mouseSlice.reducer