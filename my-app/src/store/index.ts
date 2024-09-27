import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"; // Import the authSlice reducer export default authSlice.reducer beacause it is the default export

const store = configureStore({
  reducer: {
    auth: authReducer, // we can name it anything instead of auth. here we register the authSlice reducer
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
