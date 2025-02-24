import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
    id: number;
    name: string;
}

interface UserState {
    users: User[];
}

const initialState: UserState = {
    users: [],
};

export const headerSlice = createSlice({
    name: "header",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<string>) => {
            state.users.push({
                id: Date.now(),
                name: action.payload,
            });
        },
        removeUser: (state, action: PayloadAction<number>) => {
            state.users = state.users.filter((user) => user.id !== action.payload);
        },
    },
});

export const { addUser, removeUser } = headerSlice.actions;
export default headerSlice.reducer;
