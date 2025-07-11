import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import userSliceReducer from "./userSlice"; // Import your user slice reducer
import storage  from "redux-persist/lib/storage";

// 1.  Combine your reducers
const rootReducer = combineReducers({
    // Add your reducers here
    // Example: user: userReducer,
    // auth: authReducer,
    // Add more reducers as needed
    user: userSliceReducer,
    
})

//create persistent store
const persistConfig = {
    key: 'root',
    storage ,//: localStorage, // or sessionStorage
    // whitelist: ['user', 'auth'] // specify which reducers to persist
    // blacklist: ['tempData'] // specify which reducers NOT to persist
};

//enhance the rootReducer with persistConfig
const persistedReducer = persistReducer(persistConfig, rootReducer);

//create a store with the persistedReducer
const appStore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Disable serializable check for persist
        }),
});

//create a persistor from the store
export const persistor = persistStore(appStore);

//export the store
export default appStore;



