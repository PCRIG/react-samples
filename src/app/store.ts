import { configureStore } from "@reduxjs/toolkit";

import foodHubCartReducer from '../pages/foodHub/foodHubSlice';

export const store = configureStore({
    reducer: {
        foodHubCart: foodHubCartReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
