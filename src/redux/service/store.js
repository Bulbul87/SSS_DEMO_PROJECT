//Add the service to your store

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postApi } from "../api/post";

export const store=configureStore({
    reducer:{
        [postApi.reducerPath]:postApi.reducer
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(postApi.middleware),
})

setupListeners(store.dispatch)
