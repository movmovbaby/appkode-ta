import { configureStore } from "@reduxjs/toolkit/";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { usersApi } from "../api/UserService";
import { sortFilterReducer } from "./sortFilterReducer";

export const store = configureStore({
  reducer: {
    sortAndFilter: sortFilterReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
