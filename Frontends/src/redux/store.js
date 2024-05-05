import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../redux/loginSlice";





export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
  },
    // Configuration du middleware pour éviter les avertissements de sérialisation
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    }),
});


