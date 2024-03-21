import { combineReducers, configureStore } from '@reduxjs/toolkit'
import mouseSlice from './features/mouse/mouseSlice';

const rootReducer = combineReducers({
    mouse: mouseSlice,
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