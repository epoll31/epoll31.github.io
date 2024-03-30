import { combineReducers, configureStore } from '@reduxjs/toolkit'
import mouseReducer from './features/mouse/mouseSlice';
import courseFiltersReducer from './features/courseFilters/courseFiltersSlice';

const rootReducer = combineReducers({
    mouse: mouseReducer,
    courseFilters: courseFiltersReducer,
});

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<AppStore['getState']>
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch']