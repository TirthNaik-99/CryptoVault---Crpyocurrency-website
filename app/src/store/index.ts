import { configureStore } from "@reduxjs/toolkit";
import { priceAlertsSlice } from "./pricealert-store";

export const store = configureStore({
    reducer: {
        priceAlerts: priceAlertsSlice.reducer
    }
});

export type AppStore = typeof store;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;