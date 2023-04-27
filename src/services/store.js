import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";


export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer
    },
    middleWare: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(articleApi.middleware)
});