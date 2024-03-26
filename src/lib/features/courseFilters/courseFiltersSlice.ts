import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/lib/store'

export type CourseType = "Computer Science" | "Engineering" | "Mathematics" | "Design" | "Humanities";

export const allCourseTypes: CourseType[] = [
    "Computer Science",
    "Engineering",
    "Mathematics",
    "Design",
    "Humanities",
]

// Define a type for the slice state
export interface CourseFiltersState {
    courseTypes: CourseType[],
}

// Define the initial state using that type
const initialState: CourseFiltersState = {
    courseTypes: [],
}

export const courseFiltersSlice = createSlice({
    name: 'courseFilters',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        toggleCourseType: (state, action: PayloadAction<CourseType>) => {
            const index = state.courseTypes.indexOf(action.payload);
            if (index === -1) {
                state.courseTypes.push(action.payload);
            }
            else {
                state.courseTypes.splice(index, 1);
            }
        },
        clearCourseTypes: (state) => {
            state.courseTypes = [];// initialState.classTypes;
        }
    }
})

export const { toggleCourseType, clearCourseTypes } = courseFiltersSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCourseTypes = (state: RootState) => state.courseFilters.courseTypes

export default courseFiltersSlice.reducer