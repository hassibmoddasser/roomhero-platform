import { configureStore } from "@reduxjs/toolkit";
import supplierReducer from "./features/supplier/supplierSlice";
import { roomHeroApi } from "./services/supplier";

export const store = configureStore({
  reducer: {
    supplier: supplierReducer,
    // Add the generated reducer as a specific top-level slice
    [roomHeroApi.reducerPath]: roomHeroApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(roomHeroApi.middleware),
});
