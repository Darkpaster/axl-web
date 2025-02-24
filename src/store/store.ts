import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        // user: userReducer,
    },
});

// Типы для использования в хуках useSelector и useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
