import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import contactsReduser from "./contactsSlice";
import filtersReduser from "./filtersSlice";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'contacts',
    storage
};

const rootReducer = persistReducer(persistConfig, contactsReduser);

export const store = configureStore({
    reducer: {
        contacts: rootReducer,
        filters: filtersReduser,
    },
});

export const persistor = persistStore(store);